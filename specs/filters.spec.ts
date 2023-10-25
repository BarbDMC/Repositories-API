'use strict';

import { popularRepos, lastUpdatedRepos, totalStars } from "../utils/filters";

describe('Filters Utils', () => {

  const repositories = [
    { name: 'repo1', stargazers_count: 6, updated_at: '2023-10-15T19:30:00Z'},
    { name: 'repo2', stargazers_count: 3, updated_at: '2023-10-20T10:15:00Z' },
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
});