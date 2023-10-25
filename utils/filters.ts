'use strict';

interface Repository {
  name: string,
  stargazers_count: number;
  updated_at: string;
}

export const popularRepos = (repositories: Repository[]): Repository[] =>
  repositories.filter((repo) => repo.stargazers_count > 5);

export const lastUpdatedRepos = (repositories: Repository[]): Repository[] => {
  const sortedRepos = repositories.sort((a, b) => {
    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });

  return sortedRepos.slice(0, 5);
};

export const totalStars = (repositories: Repository[]): number =>
  repositories.reduce((acc, repo) => acc + repo.stargazers_count, 0);