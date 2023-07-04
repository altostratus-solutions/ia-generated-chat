import styles from "../../styles/NavBar.module.css";

function NavBar({ children }: { children: React.ReactNode }) {
  return (
    <nav className={styles["navbar-container"]}>
      <a className={`${styles["navbar-link"]} ${styles["navbar-brand"]}`}>
        <span
          className={`${styles["navbar-text"]} ${styles["navbar-text-primary"]}`}
        >
          A
        </span>
        <span
          className={`${styles["navbar-text"]} ${styles["navbar-text-primary-muted"]}`}
        >
          L
        </span>
        <span
          className={`${styles["navbar-text"]} ${styles["navbar-text-secondary"]}`}
        >
          T
        </span>
        <span
          className={`${styles["navbar-text"]} ${styles["navbar-text-secondary-muted"]}`}
        >
          O
        </span>
        <span
          className={`${styles["navbar-text"]} ${styles["navbar-text-gray"]}`}
        >
          S
        </span>
        <span
          className={`${styles["navbar-text"]} ${styles["navbar-text-primary"]}`}
        >
          T
        </span>
        <span
          className={`${styles["navbar-text"]} ${styles["navbar-text-primary-muted"]}`}
        >
          R
        </span>
        <span
          className={`${styles["navbar-text"]} ${styles["navbar-text-secondary"]}`}
        >
          A
        </span>
        <span
          className={`${styles["navbar-text"]} ${styles["navbar-text-secondary-muted"]}`}
        >
          T
        </span>
        <span
          className={`${styles["navbar-text"]} ${styles["navbar-text-gray"]}`}
        >
          U
        </span>
        <span
          className={`${styles["navbar-text"]} ${styles["navbar-text-secondary"]}`}
        >
          S
        </span>
      </a>
      <ul className={styles["navbar-list"]}>{children}</ul>
    </nav>
  );
}

export default NavBar;
