import type { Repo } from '@/types';

const CACHE_KEY = 'mb-github-repos-v2';
const CACHE_TTL_MS = 10 * 60 * 1000;
const MAX_REPOS = 6;

interface RawRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  pushed_at: string;
  fork: boolean;
  archived: boolean;
}

interface CacheEntry {
  ts: number;
  username: string;
  repos: Repo[];
}

function readCache(username: string): Repo[] | null {
  if (typeof sessionStorage === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw) as CacheEntry;
    if (cached.username !== username) return null;
    if (Date.now() - cached.ts > CACHE_TTL_MS) return null;
    return cached.repos;
  } catch {
    return null;
  }
}

function writeCache(username: string, repos: Repo[]): void {
  if (typeof sessionStorage === 'undefined') return;
  try {
    const entry: CacheEntry = { ts: Date.now(), username, repos };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    // sessionStorage can throw under quota / private mode — ignore.
  }
}

function orderRepos(repos: Repo[], featured: readonly string[]): Repo[] {
  if (featured.length === 0) return repos.slice(0, MAX_REPOS);
  const featuredSet = new Set(featured);
  const pinned: Repo[] = [];
  for (const name of featured) {
    const r = repos.find((x) => x.name === name);
    if (r) pinned.push(r);
  }
  const rest = repos.filter((r) => !featuredSet.has(r.name));
  return [...pinned, ...rest].slice(0, MAX_REPOS);
}

export async function fetchPinnedRepos(
  username: string,
  featured: readonly string[] = [],
): Promise<Repo[]> {
  const cached = readCache(username);
  if (cached) return orderRepos(cached, featured);

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
    { headers: { Accept: 'application/vnd.github+json' } },
  );

  if (!res.ok) {
    throw new Error(`GitHub API responded ${res.status}`);
  }

  const data = (await res.json()) as RawRepo[];

  const repos: Repo[] = data
    .filter((r) => !r.archived && r.name !== username)
    .map((r) => ({
      name: r.name,
      description: r.description,
      url: r.html_url,
      homepage: r.homepage,
      language: r.language,
      stars: r.stargazers_count,
      topics: r.topics ?? [],
      pushedAt: r.pushed_at,
    }))
    .sort((a, b) => b.pushedAt.localeCompare(a.pushedAt));

  writeCache(username, repos);
  return orderRepos(repos, featured);
}
