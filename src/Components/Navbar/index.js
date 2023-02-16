import React from "react";
import styles from "./navbar.module.css";

export default function Navbar(props) {
  return (
    <nav className={styles.maincontainer}>
      <p className={styles.logo}>Screenbows</p>
      <div className={styles.github}>
        <a
          href="https://github.com/manancodes/screenbows"
          target="_blank"
          rel="noreferrer"
          className={styles.githublink}
        >
          Github
        </a>
      </div>
    </nav>
  );
}
