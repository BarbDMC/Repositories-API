import express from 'express';
import { getPopularRepos, getLastUpdatedRepos, getTotalStars } from '../controllers/endpoints.js';

const router = express.Router();

router.get('/:org/popularRepos', async (req, res) => {
  const { org } = req.params;
  const popularRepositories = await getPopularRepos(org);

  res.json({ popularRepositories });
});

router.get('/:org/lastUpdatedRepos', async (req, res) => {
  const { org } = req.params;
  const lastUpdatedRepositories = await getLastUpdatedRepos(org);

  res.json({ lastUpdatedRepositories });
});

router.get('/:org/totalStars', async (req, res) => {
  const { org } = req.params;
  const totalStarsRepositories = await getTotalStars(org);

  res.json({ totalStarsRepositories });
});

export default router;