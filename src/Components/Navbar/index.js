import React from "react";
import styles from "./navbar.module.css";

export default function Navbar(props) {
  var { secondaryColor } = props;

  return (
    <nav className={styles.maincontainer}>
      <p className={styles.logo} style={{ color: secondaryColor }}>
        Screenbows
      </p>
      <div className={styles.github} style={{ borderColor: secondaryColor }}>
        <a
          href="https://github.com/manancodes/screenbows"
          target="_blank"
          rel="noreferrer"
          className={styles.githublink}
          style={{ color: secondaryColor }}
        >
          Github
        </a>
      </div>
    </nav>
  );
}
