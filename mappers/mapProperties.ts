
import { Repository, RepositoryJson } from "../models/repositoryModel";

export const convertJsonToRepository = (value: RepositoryJson[]) : Repository[] => {
  return value.map((repo) => ({
    name: repo.name,
    stargazersCount: repo.stargazers_count,
    updatedAt: repo.updated_at,
  }));
};
