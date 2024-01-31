import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";

import styles from "./resume-page.module.scss";
import { useGitHubData } from "../hooks/useGitHubData";
import { UserData } from "../components/user-data";
import { ReposData } from "../components/repos-data";

export const ResumePage = () => {
  const { userName } = useParams();
  const { data, loading, error } = useGitHubData(userName);
  console.log("data", data);
  return (
    <main className={styles.page}>
      {data ? (
        <>
          <Link className={styles.page__back_btn} to="/">
            Back
          </Link>
          <UserData user={data.user} />
          <ReposData repos={data.repos} />
        </>
      ) : null}
      {loading ? <div>LOADING</div> : null}
      {error ? (
        <div>
          <Link className={styles.page__back_btn} to="/">
            Back
          </Link>
          <h2>Oops!</h2>
          <p>something went wrong</p>
          <p> {error}</p>
        </div>
      ) : null}
    </main>
  );
};
