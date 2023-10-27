'use strict';

import { popularRepos, lastUpdatedRepos, totalStars, topRepos, listAlphabetically } from "../services/repositoriesService";

describe('Filters Utils', () => {

  const repositories = [
    { name: 'repo1', stargazers_count: 6, updated_at: '2023-10-15T19:30:00Z'},
    { name: 'repo2', stargazers_count: 3, updated_at: '2023-10-20T10:15:00Z' },
    { name: 'hrepo3', stargazers_count: 20, updated_at: '2023-10-20T10:15:00Z' },
    { name: 'repo4', stargazers_count: 12, updated_at: '2023-10-20T10:15:00Z' },
    { name: 'repo5', stargazers_count: 7, updated_at: '2023-10-20T10:15:00Z' },
    { name: 'repo6', stargazers_count: 14, updated_at: '2023-10-20T10:15:00Z' }
  ];

  describe('When Popular repos', () => {
    it('should return repositories with more than 5 stars', () => {
      const popularRepositories = popularRepos(repositories);

      expect(popularRepositories[0].name).toBe('repo1');
      expect(popularRepositories[0].stargazers_count).toBe(6);
      expect(popularRepositories[0].updated_at).toBe('2023-10-15T19:30:00Z');
    });
  });

  describe('When Last updated repos', () => {
    it('should return last 5 updated repositories', () => {
      const lastUpdatedRepositories = lastUpdatedRepos(repositories);

      expect(lastUpdatedRepositories[0].name).toBe('repo2');
      expect(lastUpdatedRepositories[0].stargazers_count).toBe(3);
      expect(lastUpdatedRepositories[0].updated_at).toBe('2023-10-20T10:15:00Z');

      expect(lastUpdatedRepositories[1].name).toBe('repo1');
      expect(lastUpdatedRepositories[1].stargazers_count).toBe(6);
      expect(lastUpdatedRepositories[1].updated_at).toBe('2023-10-15T19:30:00Z');
    });
  });

  describe('When Total stars', () => {
    it('should return the sum of all repository stars', () => {
      const starsSum = totalStars(repositories);
      expect(starsSum).toBe(9);
    });
  });

  describe('When Top Repositories', () => {
    it('should get the top 5 organization repositories', () => {
      const topRepositories = topRepos(repositories);

      expect(topRepositories).toHaveLength(5);
      expect(topRepositories[0].name).toBe('repo3');
      expect(topRepositories[0].stargazers_count).toBe(20);
      expect(topRepositories[0].updated_at).toBe('2023-10-20T10:15:00Z');
    });
  });

  describe('When List alphabetically', () => {
    it('should list the organization repositories alphabetically and omit names starting with h', () => {
      const listAlpha = listAlphabetically(repositories);

      expect(listAlpha).toHaveLength(5);

      expect(listAlpha[0].name).toBe('repo1');
      expect(listAlpha[0].name).toBe('repo2');
      expect(listAlpha[0].name).toBe('repo4');
      expect(listAlpha[0].name).toBe('repo5');
      expect(listAlpha[0].name).toBe('repo6');

    });
  });
});