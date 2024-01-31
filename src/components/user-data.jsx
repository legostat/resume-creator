import PropTypes from "prop-types";
import styles from "./user-data.module.scss";

export const UserData = ({ user }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.avatar}>
          <img src={user.avatar_url} alt={user.name} />
        </div>
        <div>
          <h1 className={styles.name}> {user.name} </h1>
          <a href={user.blog} target="_blank" rel="noreferrer">
            {user.blog}
          </a>
        </div>
      </header>
      <section className={styles.about}>
        On GitHub since {user.created_at}, {user.name} is a developer{" "}
        {user.location
          ? `based in
        ${user.location}`
          : null}{" "}
        with {user.public_repos} public repositories and {user.followers}{" "}
        {`follower${user.followers === 1 ? null : "s"}`} .
      </section>
    </>
  );
};

UserData.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    blog: PropTypes.string,
    avatar_url: PropTypes.string,
    location: PropTypes.string,
    public_repos: PropTypes.number,
    followers: PropTypes.number,
    created_at: PropTypes.string,
  }),
};
