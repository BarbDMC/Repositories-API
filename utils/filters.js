'use strict';

export const popularRepos = (repositories) => 
  repositories.filter(repo => repo.stargazers_count > 5);
  

export const lastUpdatedRepos = (repositories) => {
  const sortedRepos = repositories.sort((a, b) => {
    return new Date(b.updated_at) - new Date(a.updated_at);
  });

  return sortedRepos.slice(0, 5);
};
  
export const totalStars = (repositories) => 
  repositories.reduce((acc, repo) => acc + repo.stargazers_count, 0);
