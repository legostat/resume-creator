import PropTypes from "prop-types";
import styles from "./single-repo.module.scss";

export const SingleRepo = ({ repo }) => {
  // const startDate = new Date(repo.created_at);
  const lastUpdateDate = new Date(repo.updated_at);

  return (
    <div className={styles.repo}>
      <div>
        <h3 className={styles.repo__name}>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a>
        </h3>
        <h4 className={styles.repo__lang}> {repo.language} </h4>
      </div>
      <div>
        {/* {startDate.getFullYear()} - {lastUpdateDate.getFullYear()} */}
        {lastUpdateDate.toLocaleDateString()}
      </div>
    </div>
  );
};

SingleRepo.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string,
    html_url: PropTypes.string,
    language: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
  }),
};
