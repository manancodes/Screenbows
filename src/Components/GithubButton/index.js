import React from "react";

import styles from "./githubbutton.module.css";

export default function GithubButton(props) {
  var { secondaryColor } = props;
  return (
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
  );
}
