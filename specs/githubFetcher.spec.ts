import axios from "axios";
import { repositories } from "./fixtures/repositories";
import { jest } from '@jest/globals';
import { githubFetcher } from "../dataAccess/githubFetcher";

describe('Github Fetcher', () => {
  const mockAxiosGet = jest.spyOn(axios, 'get');

  mockAxiosGet.mockResolvedValue({
    data: repositories,
  });

  describe('When getRepositories', () => {
    it('should called axios with the github api url and the organization name', async () => {
      await githubFetcher.getRepositories('StackBuilders');
      expect(axios.get).toHaveBeenCalledWith('https://api.github.com/orgs/StackBuilders/repos');
    });

    it('should return repositories from github', async () => {
      const repositories = await githubFetcher.getRepositories('StackBuilders');
      expect(repositories).toHaveLength(6);
    });
  });
});