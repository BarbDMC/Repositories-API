import { jest } from '@jest/globals';
import app from '../app.js';
import axios from 'axios';
import request from 'supertest';

describe('App', () => {
  axios.get = jest.fn();
  axios.get.mockResolvedValue({
    data: [
      { name: 'repo1', stargazers_count: 6 },
      { name: 'repo2', stargazers_count: 3 }
    ],
  });

  describe('When GET /:org/popularRepos', () => {
    it('should respond with 200 status and popular repositories', async () => {
      const response = await request(app)
        .get("/StackBuilders/popularRepos")
        .set("content-type", "application/json");


      expect(response.status).toBe(200);
      expect(response.body.popularRepositories).toHaveLength(1);
    });
  });

  describe('When GET /:org/lastUpdatedRepos', () => {
    it('should respond with 200 status and last 5 updated repositories', async () => {
      const response = await request(app)
        .get("/StackBuilders/lastUpdatedRepos")
        .set("content-type", "application/json");

      expect(response.status).toBe(200);
      expect(response.body.lastUpdatedRepositories).toHaveLength(2);
    });
  });

  describe('When GET /:org/totalStars', () => {
    it('should respond with 200 status and the stars sum', async () => {
      const response = await request(app)
        .get("/StackBuilders/totalStars")
        .set("content-type", "application/json");


      expect(response.status).toBe(200);
      expect(response.body.totalStarsRepositories).toBe(9);
    });
  });
});