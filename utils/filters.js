'use strict';

module.exports = {
  popularRepos: (repositories) => {
    return repositories.filter(repo => repo.stargazers_count > 5);
  },

  lastUpdatedRepos: (repositories) => {
    const sortedRepos = repositories.sort((a, b) => {
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

    return sortedRepos.slice(0, 5);
  },
  
  totalStars: (repositories) => {
    return repositories.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  }
};