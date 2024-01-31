import { SearchForm } from "../components/search-form";
import styles from "./main-page.module.scss";

export const MainPage = () => {
  return (
    <main className={styles.page}>
      <h1 className={styles.page__title}>My GitHub Resume</h1>
      <SearchForm />
    </main>
  );
};
