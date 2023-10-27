import axios from 'axios';
import RepoFetcher from '../model/repoFetcherModel';

export const githubFetcher: RepoFetcher = {
  async getRepositories(org: string) {
    const response = await axios.get(`https://api.github.com/orgs/${org}/repos`);
    return response.data;
  }
};