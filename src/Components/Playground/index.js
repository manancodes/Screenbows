import React from "react";

import styles from "./playground.module.css";
import Navbar from "../Navbar";

function Playground(props) {
  return (
    <div
      className={styles.background}
      style={{ background: props.primaryColor }}
    >
      <Navbar />
    </div>
  );
}

export default Playground;
