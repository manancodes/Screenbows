import React, { useState } from "react";

import styles from "./playground.module.css";
import Navbar from "../Navbar";
import Console from "../Console";
import GithubButton from "../GithubButton";

function Playground(props) {
  var { primaryColor, secondaryColor, getRandomColors, handleColorChange } = props;
  const [dimensions, setdimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const changeDimensions = (e) => {
    setdimensions({ ...dimensions, [e.target.name]: Number(e.target.value) });
  };
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
      <Console
        primaryColor={primaryColor}
        getRandomColors={getRandomColors}
        handleColorChange={handleColorChange}
        changeDimensions={changeDimensions}
        dimensions={dimensions}
      />
      <div className={styles.githubMobile}>
        <GithubButton secondaryColor={secondaryColor} />
      </div>
    </div>
  );
}

export default Playground;
