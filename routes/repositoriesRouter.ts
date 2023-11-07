import express, { Request, Response } from 'express';
import { githubFetcher } from '../dataAccess/githubFetcher';
import { getPopularRepos, getLastUpdatedRepos, getTotalStars, getTopRepos, getListAlphabetic } from '../controllers/repositoriesController';

const router = express.Router();

router.get('/:org/popularRepos', async (req: Request, res: Response) => {
  const { org } = req.params;
  const popularRepositories = await getPopularRepos(githubFetcher, org);

  res.json({ popularRepositories });
});

router.get('/:org/lastUpdatedRepos', async (req: Request, res: Response) => {
  const { org } = req.params;
  const lastUpdatedRepositories = await getLastUpdatedRepos(githubFetcher, org);

  res.json({ lastUpdatedRepositories });
});

router.get('/:org/totalStars', async (req: Request, res: Response) => {
  const { org } = req.params;
  const totalStarsRepositories = await getTotalStars(githubFetcher, org);

  res.json({ totalStarsRepositories });
});

router.get('/:org/topRepos', async (req: Request, res: Response) => {
  const { org } = req.params;
  const topRepositories = await getTopRepos(githubFetcher, org);

  res.json({ topRepositories });
});

router.get('/:org/listAlphabetically', async (req: Request, res: Response) => {
  const { org } = req.params;
  const listAlphabetically = await getListAlphabetic(githubFetcher, org);

  res.json({ listAlphabetically });
});

export default router;
