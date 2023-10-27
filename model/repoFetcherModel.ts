'use strict';

interface RepoFetcher {
  getRepositories(org: string): Promise<any>;
}

export default RepoFetcher;
