import { useEffect, useState } from 'react';
import { fetchPinnedRepos } from '@/lib/github';
import type { Repo } from '@/types';

type Status = 'loading' | 'success' | 'error';

interface State {
  status: Status;
  repos: Repo[];
  error: string | null;
}

const initial: State = { status: 'loading', repos: [], error: null };

export function useGithubRepos(
  username: string,
  featured: readonly string[] = [],
) {
  const [state, setState] = useState<State>(initial);
  const featuredKey = featured.join(',');

  useEffect(() => {
    let cancelled = false;
    setState(initial);

    fetchPinnedRepos(username, featured)
      .then((repos) => {
        if (cancelled) return;
        setState({ status: 'success', repos, error: null });
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        const message =
          err instanceof Error ? err.message : 'Unknown error';
        setState({ status: 'error', repos: [], error: message });
      });

    return () => {
      cancelled = true;
    };
    // featured is stable from data file; track via stringified key.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username, featuredKey]);

  return state;
}
