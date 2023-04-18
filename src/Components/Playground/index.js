import React from "react";

import styles from "./playground.module.css";
import Navbar from "../Navbar";
import Console from "../Console";

function Playground(props) {
  var { primaryColor, secondaryColor, getRandomColors } = props;

  return (
    <div className={styles.background} style={{ background: primaryColor }}>
      <Navbar secondaryColor={secondaryColor} />
      <Console primaryColor={primaryColor} getRandomColors={getRandomColors} />
    </div>
  );
}

export default Playground;
