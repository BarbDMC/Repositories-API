import RepoFetcher from '../model/repoFetcherModel';
import { popularRepos, lastUpdatedRepos, totalStars } from '../services/repositoriesService';

export const getPopularRepos = async (fetch: RepoFetcher, org: string) => {
  const repositories = await fetch.getRepositories(org);
  return popularRepos(repositories);
};

export const getLastUpdatedRepos = async (fetch: RepoFetcher, org: string) => {
  const repositories = await fetch.getRepositories(org);

  return lastUpdatedRepos(repositories);
};

export const getTotalStars = async (fetch: RepoFetcher, org: string) => {
  const repositories = await fetch.getRepositories(org);
  return totalStars(repositories);
};
