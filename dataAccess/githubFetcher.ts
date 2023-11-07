
import axios from 'axios';
import RepoFetcher from '../models/repoFetcherModel';
import { convertJsonToRepository } from '../mappers/mapProperties';

export const githubFetcher: RepoFetcher = {
  async getRepositories(org: string) {
    const response = await axios.get(`https://api.github.com/orgs/${org}/repos`);
    return convertJsonToRepository(response.data);
  }
};
