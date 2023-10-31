
import RepoFetcher from '../models/repoFetcherModel';
import { popularRepos, lastUpdatedRepos, totalStars , topRepos, listAlphabetically} from '../services/repositoriesService';

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

export const getTopRepos = async (fetch: RepoFetcher, org: string) => {
  const repositories = await fetch.getRepositories(org);
  return topRepos(repositories);
};

export const getListAlphabetic = async (fetch: RepoFetcher, org: string) => {
  const repositories = await fetch.getRepositories(org);
  return listAlphabetically(repositories);
};
