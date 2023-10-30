import axios from 'axios';
import RepoFetcher from '../models/repoFetcherModel';

export const githubFetcher: RepoFetcher = {
  async getRepositories(org: string) {
    const response = await axios.get(`https://api.github.com/orgs/${org}/repos`);
    return response.data;
  }
};