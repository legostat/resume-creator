export const getFormattedRepos = (repos) => {
  return repos
    .filter((repo) => !repo.fork)
    .sort((a, b) => {
      // Convert the date strings to Date objects
      let dateA = new Date(a.updated_at);
      let dateB = new Date(b.updated_at);

      // Subtract the dates to get a value that is either negative, positive, or zero
      return -1 * (dateA - dateB);
    })
    .slice(0, 5);
};
