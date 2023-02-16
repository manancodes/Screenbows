import React from "react";

import styles from "./playground.module.css";
import Navbar from "../Navbar";

function Playground(props) {
  var { primaryColor, secondaryColor } = props;
  return (
    <div className={styles.background} style={{ background: primaryColor }}>
      <Navbar secondaryColor={secondaryColor} />
    </div>
  );
}

export default Playground;
