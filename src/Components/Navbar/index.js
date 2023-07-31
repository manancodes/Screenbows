import React from "react";
import styles from "./navbar.module.css";
import GithubButton from "../GithubButton";

export default function Navbar(props) {
  var { secondaryColor } = props;

  return (
    <nav className={styles.maincontainer}>
      <p className={styles.logo} style={{ color: secondaryColor }}>
        Screenbows
      </p>
      <div className={styles.desktopshare}>
        <GithubButton secondaryColor={secondaryColor} />
      </div>
    </nav>
  );
}
