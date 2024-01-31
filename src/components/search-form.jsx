import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./search-form.module.scss";

export const SearchForm = () => {
  const [userName, setUserName] = useState("");

  const handleInput = (e) => {
    setUserName(e.target.value);
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.trim() === "") {
      return;
    }
    history.push(`/${userName}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.form__input}
        type="text"
        placeholder="Enter your GitHub username"
        onChange={handleInput}
      />
      <button className={styles.form__btn} type="submit">
        Generate
      </button>
    </form>
  );
};
