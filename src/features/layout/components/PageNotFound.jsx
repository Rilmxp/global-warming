import styles from "./PageNotFound.module.scss";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className={styles.wrapper}>
      <header>
        <h1 className={styles.header}>Page not found</h1>
      </header>
      <Link to="/" className={styles.linkBtn}>
        <button type="button" className={styles.btn}>
          Back to Homepage
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
