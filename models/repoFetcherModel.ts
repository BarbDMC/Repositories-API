
import { Repository } from "../models/repositoryModel";

interface RepoFetcher {
  getRepositories(org: string): Promise<Repository []>;
}

export default RepoFetcher;
