import axios from 'axios';
import { popularRepos, lastUpdatedRepos, totalStars } from '../utils/filters.js';

export const getPopularRepos = async (org) => {
  const repositories = await getRepositories(org);
  return popularRepos(repositories);
};

export const getLastUpdatedRepos = async (org) => {
  const repositories = await getRepositories(org);
  return lastUpdatedRepos(repositories);
};

export const getTotalStars = async (org) => {
  const repositories = await getRepositories(org);
  return totalStars(repositories);
};


async function getRepositories(org) {
  const response = await axios.get(`https://api.github.com/orgs/${org}/repos`);
  return response.data;
}
