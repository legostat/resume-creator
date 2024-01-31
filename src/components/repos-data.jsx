/* eslint-disable react/prop-types */
import { SingleRepo } from "./single-repo";
import styles from "./repos-data.module.scss";
import { getFormattedRepos } from "../utils/getFormattedRepos";
import { getLanguagesList } from "../utils/getLanguagesList";
import { ReposChart } from "./repos-chart";

export const ReposData = ({ repos }) => {
  const formattedRepos = getFormattedRepos(repos);
  const languagesList = getLanguagesList(repos);
  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.title}>Languages Usage</h2>
        <ReposChart languagesList={languagesList} />
      </section>
      <section className={styles.container}>
        <h2 className={styles.title}>Last updated public repos</h2>
        <div className="">
          {formattedRepos.length > 0 ? (
            formattedRepos.map((repo) => (
              <SingleRepo key={repo.id} repo={repo} />
            ))
          ) : (
            <p className={styles.no_data}>
              It looks like this section doesn't have any data
            </p>
          )}
        </div>
      </section>
    </>
  );
};
