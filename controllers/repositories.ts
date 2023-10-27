import axios from 'axios';
import { popularRepos, lastUpdatedRepos, totalStars } from '../utils/filters';

export const getPopularRepos = async (org: String) => {
  const repositories = await getRepositories(org);
  return popularRepos(repositories);
};

export const getLastUpdatedRepos = async (org: String) => {
  const repositories = await getRepositories(org);
  return lastUpdatedRepos(repositories);
};

export const getTotalStars = async (org: String) => {
  const repositories = await getRepositories(org);
  return totalStars(repositories);
};


async function getRepositories(org: String) {
  const response = await axios.get(`https://api.github.com/orgs/${org}/repos`);
  return response.data;
}
