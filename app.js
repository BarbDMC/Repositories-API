const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const filters = require('./utils/filters');

app.get('/:org/popularRepos', async (req, res) => {
  const { org } = req.params;
  const repositories = await getRepositories(org);

  const popularRepos = filters.popularRepos(repositories);

  res.json({ popularRepos });
});

app.get('/:org/lastUpdatedRepos', async (req, res) => {
  const { org } = req.params;
  const repositories = await getRepositories(org);

  const lastUpdatedRepos = filters.lastUpdatedRepos(repositories);

  res.json({ lastUpdatedRepos });
});

app.get('/:org/totalStars', async (req, res) => {
  const { org } = req.params;
  const repositories = await getRepositories(org);

  const totalStars = filters.totalStars(repositories);

  res.json({ totalStars });
});

async function getRepositories(org) {
  const response = await axios.get(`https://api.github.com/orgs/${org}/repos`);
  return response.data;
}

app.listen(port);

module.exports = app;