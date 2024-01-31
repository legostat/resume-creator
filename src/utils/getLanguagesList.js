export const getLanguagesList = (repos) => {
  let languagesList = new Map();
  repos.forEach((repo) => {
    if (!repo.fork && repo.language && languagesList.has(repo.language)) {
      console.log("repo.language", repo.language);

      const newValue = languagesList.get(repo.language) + 1;
      languagesList.set(repo.language, newValue);
    } else {
      languagesList.set(repo.language, 1);
    }
  });
  if (languagesList.has(null)) {
    languagesList.delete(null);
  }
  return languagesList;
};
