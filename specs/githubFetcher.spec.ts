import axios from "axios";
import { jest } from '@jest/globals';
import { githubFetcher } from "../dataAccess/githubFetcher";

describe('Github Fetcher', () => {
  const mockAxiosGet = jest.spyOn(axios, 'get');

  mockAxiosGet.mockResolvedValue({
    data: [
      { name: 'repo1'},
      { name: 'repo2'},
      { name: 'repo3'},
      { name: 'repo4'},
    ],
  });

  describe('When getRepositories', () => {
    it('should called axios with the github api url and the organization name', async () => {
      await githubFetcher.getRepositories('StackBuilders');
      expect(axios.get).toHaveBeenCalledWith('https://api.github.com/orgs/StackBuilders/repos');
    });

    it('should return repositories from github', async () => {
      const repositories = await githubFetcher.getRepositories('StackBuilders');
      expect(repositories).toHaveLength(4);
    });
  });
});