/**
 * Projects are loaded live from GitHub via `src/lib/github.ts` at runtime.
 *
 * Use `featuredRepoNames` to pin specific repos at the top of the section
 * (in the order listed). Any repos not in the featured list fill the
 * remaining slots, sorted by `pushed_at` descending.
 *
 * Leave `featuredRepoNames` empty to show the most-recently-updated repos.
 */
export const GITHUB_USERNAME = 'mathbruf';

export const featuredRepoNames: string[] = [
  // 'repo-name',
];
