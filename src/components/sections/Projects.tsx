import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { useGithubRepos } from '@/hooks/useGithubRepos';
import { GITHUB_USERNAME, featuredRepoNames } from '@/data/projects';
import { stagger } from '@/lib/motion';
import { cn } from '@/lib/cn';
import { useLang } from '@/lib/i18n';
import type { Project, Repo } from '@/types';

const SKELETON_COUNT = 6;

function repoToProject(repo: Repo): Project {
  return {
    title: repo.name,
    description: repo.description ?? 'No description.',
    tags: repo.topics.length
      ? repo.topics
      : repo.language
        ? [repo.language.toLowerCase()]
        : [],
    github: repo.url,
    demo: repo.homepage && repo.homepage.length > 0 ? repo.homepage : undefined,
  };
}

export function Projects() {
  const { lang } = useLang();
  const { status, repos, error } = useGithubRepos(
    GITHUB_USERNAME,
    featuredRepoNames,
  );

  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-wide mx-auto scroll-mt-20"
    >
      <SectionHeading
        index="04"
        label={{ en: 'Selected Code', no: 'Utvalgt kode' }}
        title={{ en: "Things I've built.", no: 'Ting jeg har laget.' }}
      />

      {status === 'loading' && <SkeletonList />}

      {status === 'error' && <ErrorState error={error} lang={lang} />}

      {status === 'success' && repos.length === 0 && (
        <div className="border-y border-ink/15 py-16 md:py-24 text-center">
          <p className="font-mono text-micro text-ink/50 mb-3">
            {lang === 'en' ? 'STATUS — DRAFTING' : 'STATUS — UNDER ARBEID'}
          </p>
          <p className="font-serif italic text-display-3 text-ink-soft">
            {lang === 'en'
              ? 'No public repositories yet — check back soon.'
              : 'Ingen offentlige repoer ennå — kom tilbake senere.'}
          </p>
        </div>
      )}

      {status === 'success' && repos.length > 0 && (
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="border-t border-ink/15"
        >
          {repos.map((r, i) => (
            <ProjectCard
              key={r.name}
              project={repoToProject(r)}
              index={i}
              isLast={i === repos.length - 1}
            />
          ))}
        </motion.div>
      )}
    </section>
  );
}

function SkeletonList() {
  return (
    <div className="border-t border-ink/15" aria-busy="true" aria-live="polite">
      {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
        <div
          key={i}
          className={cn(
            'py-8 md:py-12',
            i !== SKELETON_COUNT - 1 && 'border-b border-ink/15',
          )}
        >
          <div className="grid grid-cols-12 gap-y-3 gap-x-6 md:gap-x-8 items-baseline">
            <div className="col-span-2 md:col-span-1 font-mono text-mono-sm text-ink/30">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="col-span-10 md:col-span-5">
              <div className="h-7 w-2/3 bg-ink/10 animate-pulse" />
            </div>
            <div className="col-span-12 md:col-span-4 space-y-2">
              <div className="h-3 w-full bg-ink/10 animate-pulse" />
              <div className="h-3 w-3/4 bg-ink/10 animate-pulse" />
            </div>
            <div className="col-span-12 md:col-span-2">
              <div className="h-3 w-1/2 bg-ink/10 animate-pulse md:ml-auto" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ErrorState({
  error,
  lang,
}: {
  error: string | null;
  lang: 'en' | 'no';
}) {
  return (
    <div className="border-y border-ink/15 py-12 md:py-16 text-center">
      <p className="font-mono text-micro text-ink/50 mb-3">
        {lang === 'en' ? '— GITHUB UNAVAILABLE —' : '— GITHUB IKKE TILGJENGELIG —'}
      </p>
      <p className="font-serif italic text-display-3 text-ink-soft max-w-measure mx-auto">
        {lang === 'en' ? (
          <>
            Couldn&rsquo;t reach GitHub right now ({error ?? 'unknown error'}).
            See the repositories directly at{' '}
          </>
        ) : (
          <>
            Får ikke kontakt med GitHub akkurat nå ({error ?? 'ukjent feil'}).
            Se prosjektene direkte på{' '}
          </>
        )}
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-vermillion underline underline-offset-4"
        >
          github.com/{GITHUB_USERNAME}
        </a>
        .
      </p>
    </div>
  );
}
