
import { Repository } from "../models/repositoryModel";

export const popularRepos = (repositories: Repository[]): Repository[] =>
  repositories.filter((repo) => repo.stargazersCount > 5);

export const lastUpdatedRepos = (repositories: Repository[]): Repository[] => {
  const sortedRepos = repositories.sort((a, b) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  return sortedRepos.slice(0, 5);
};

export const totalStars = (repositories: Repository[]): number =>
  repositories.reduce((acc, repo) => acc + repo.stargazersCount, 0);


export const topRepos = (repositories: Repository[]): Repository[] => {
  const sortedRepos = repositories.sort((a, b) => b.stargazersCount - a.stargazersCount);

  return sortedRepos.slice(0, 5);
};

export const listAlphabetically = (repositories: Repository[]): Repository[] => {
  const sortedRepos = repositories.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;

    return 0;
  });

  return sortedRepos.filter((repo) => repo.name[0] !== 'h');
};
