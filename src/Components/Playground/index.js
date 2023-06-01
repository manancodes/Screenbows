import React, { useState } from "react";

import styles from "./playground.module.css";
import Navbar from "../Navbar";
import Console from "../Console";

function Playground(props) {
  var { primaryColor, secondaryColor, getRandomColors } = props;
  const [dimensions, setdimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  return (
    <div className={styles.background} style={{ background: primaryColor }}>
      <div className={styles.noOverflow}>
        <div
          id="image"
          style={{
            background: primaryColor,
            height: dimensions.height / 2,
            width: dimensions.width / 2,
          }}
        />
      </div>
      <Navbar secondaryColor={secondaryColor} />
      <Console primaryColor={primaryColor} getRandomColors={getRandomColors} />
    </div>
  );
}

export default Playground;
