import { jest } from '@jest/globals';
import axios from 'axios';
import { getPopularRepos, getLastUpdatedRepos, getTotalStars } from '../controllers/repositories';

describe('Repositories Controller', () => {
  const mockAxiosGet = jest.spyOn(axios, 'get');

  mockAxiosGet.mockResolvedValue({
    data: [
      { name: 'repo1', stargazers_count: 6 },
      { name: 'repo2', stargazers_count: 3 },
    ],
  });

  describe('When getPopularRepos', () => {
    fit('should call axios and return the popular repositories', async () => {
      const popularRepos = await getPopularRepos('StackBuilders');

      expect(axios.get).toHaveBeenCalledWith('https://api.github.com/orgs/StackBuilders/repos');
      expect(popularRepos).toHaveLength(1);
    });
  });

  describe('When getLastUpdatedRepos', () => {
    it('should call axios and return the last updated repositories', async () => {
      const lastUpdatedRepos = await getLastUpdatedRepos('StackBuilders');

      expect(axios.get).toHaveBeenCalledWith('https://api.github.com/orgs/StackBuilders/repos');
      expect(lastUpdatedRepos).toHaveLength(2);
    });
  });

  describe('When getTotalStars', () => {
    it('should call axios and return the stars sum', async () => {
      const totalStarsRepos = await getTotalStars('StackBuilders');

      expect(axios.get).toHaveBeenCalledWith('https://api.github.com/orgs/StackBuilders/repos');
      expect(totalStarsRepos).toBe(9);
    });
  });
});