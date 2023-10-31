
import { repositories } from "./fixtures/repositories";
import RepoFetcher from '../models/repoFetcherModel';
import { getPopularRepos, getLastUpdatedRepos, getTotalStars, getTopRepos, getListAlphabetic } from '../controllers/repositoriesController';

describe('Repositories Controller', () => {
  
  const mockRepoFetcher: RepoFetcher = {
    getRepositories: async (): Promise<any> => {
      return Promise.resolve(repositories);
    }
  };

  describe('When getPopularRepos', () => {
    it('should return repositories with more than 5 stars', async () => {
      const popularRepos = await getPopularRepos(mockRepoFetcher, 'StackBuilders');
      expect(popularRepos).toHaveLength(5);
    });
  });

  describe('When getLastUpdatedRepos', () => {
    it('should return last 5 updated repositories', async () => {
      const lastUpdatedRepos = await getLastUpdatedRepos(mockRepoFetcher, 'StackBuilders');
      expect(lastUpdatedRepos).toHaveLength(5);
    });
  });

  describe('When getTotalStars', () => {
    it('should return the sum of all repository stars', async () => {
      const totalStarsRepos = await getTotalStars(mockRepoFetcher, 'StackBuilders');
      expect(totalStarsRepos).toBe(62);
    });
  });

  describe('When getTopRepos', () => {
    it('should return the top 5 repositories', async () => {
      const topRepos = await getTopRepos(mockRepoFetcher, 'StackBuilders');
      expect(topRepos).toHaveLength(5);
    });
  });

  describe('When getListAlphabetic', () => {
    it('should return the repositories order alphabetically', async () => {
      const listAlphabetic = await getListAlphabetic(mockRepoFetcher, 'StackBuilders');
      expect(listAlphabetic).toHaveLength(5);
    });
  });
});
