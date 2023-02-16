import React from "react";

import styles from "./playground.module.css";
import Navbar from "../Navbar";

function Playground() {
  return (
    <div className={styles.background}>
      <Navbar />
    </div>
  );
}

export default Playground;
