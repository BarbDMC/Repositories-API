'use strict';

import express from 'express';
import request from 'supertest';
import router from '../routes/repositoriesRouter';

const app = express();
app.use(router);

describe('repositoriesRouter', () => {
  
  describe('When GET /:org/popularRepos', () => {
    it('should have a /:org/popularRepos route', async () => {
      const response = await request(app).get('/testorg/popularRepos');
      expect(response.status).toBe(200);
    });

    it('should return a list of repositories', async () => {
      const response = await request(app).get('/testorg/popularRepos');
      expect(response.body.popularRepositories).toBeDefined();
    });
  });

  describe('When GET /:org/lastUpdatedRepos', () => {
    it('should have a /:org/lastUpdatedRepos route', async () => {
      const response = await request(app).get('/testorg/lastUpdatedRepos');
      expect(response.status).toBe(200);
    });

    it('should return a list of repositories', async () => {
      const response = await request(app).get('/testorg/lastUpdatedRepos');
      expect(response.body.lastUpdatedRepositories).toBeDefined();
    });
  });

  describe('When GET /:org/totalStars', () => {
    it('should have a /:org/totalStars route', async () => {
      const response = await request(app).get('/testorg/totalStars');
      expect(response.status).toBe(200);
    });
    
    it('should return the stars number', async () => {
      const response = await request(app).get('/testorg/totalStars');
      expect(response.body.totalStarsRepositories).toBeDefined();
    });
  });

  describe('When GET /:org/topRepos', () => {
    it('should have a /:org/topRepos route', async () => {
      const response = await request(app).get('/testorg/topRepos');
      expect(response.status).toBe(200);
    });
    
    it('should return a list of repositories', async () => {
      const response = await request(app).get('/testorg/topRepos');
      expect(response.body.topRepositories).toBeDefined();
    });
  });

  describe('When GET /:org/listAlphabetically', () => {
    it('should have a /:org/listAlphabetically route', async () => {
      const response = await request(app).get('/testorg/listAlphabetically');
      expect(response.status).toBe(200);
    });
    
    it('should return a list of repositories', async () => {
      const response = await request(app).get('/testorg/listAlphabetically');
      expect(response.body.listAlphabetically).toBeDefined();
    });
  });

  describe('When non-existent route', () => {
    it('should return 404 for', async () => {
      const response = await request(app).get('/testorg/nonExistentRoute');
      expect(response.status).toBe(404);
    });
  });
});
