import RepoFetcher from '../model/repoFetcherModel';
import { getPopularRepos, getLastUpdatedRepos, getTotalStars } from '../controllers/repositoriesController';

describe('Repositories Controller', () => {
  
  const mockRepoFetcher: RepoFetcher = {
    getRepositories: async (): Promise<any> => {
      return Promise.resolve([
        { name: 'repo1', stargazers_count: 6, updated_at: '2023-10-15T19:30:00Z'},
        { name: 'repo2', stargazers_count: 3, updated_at: '2023-10-20T10:15:00Z' }
      ]);
    }
  };

  describe('When getPopularRepos', () => {
    it('should return repositories with more than 5 stars', async () => {
      const popularRepos = await getPopularRepos(mockRepoFetcher, 'StackBuilders');
      expect(popularRepos).toHaveLength(1);
    });
  });

  describe('When getLastUpdatedRepos', () => {
    it('should return last 5 updated repositories', async () => {
      const lastUpdatedRepos = await getLastUpdatedRepos(mockRepoFetcher, 'StackBuilders');
      expect(lastUpdatedRepos).toHaveLength(2);
    });
  });

  describe('When getTotalStars', () => {
    it('should return the sum of all repository stars', async () => {
      const totalStarsRepos = await getTotalStars(mockRepoFetcher, 'StackBuilders');
      expect(totalStarsRepos).toBe(9);
    });
  });
});