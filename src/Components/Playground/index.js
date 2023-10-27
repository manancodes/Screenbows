import React, { useState } from "react";

import styles from "./playground.module.css";
import Navbar from "../Navbar";
import Console from "../Console";
import GithubButton from "../GithubButton";

function Playground(props) {
  var {
    primaryColor,
    secondaryColor,
    getRandomColors,
    randomPattern,
    handleColorChange,
  } = props;
  const [dimensions, setdimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [patterns, setPattern] = useState(false);

  let pattern;
  let size;

  const togglePatterns = () => {
    setPattern(!patterns);
  };

  if (patterns) {
    pattern = randomPattern.pattern;
    size = randomPattern.size;
  }

  const changeDimensions = (e) => {
    setdimensions({ ...dimensions, [e.target.name]: Number(e.target.value) });
  };
  return (
    <div
      className={styles.background}
      style={{
        "background-color": primaryColor,
        "background-image": pattern,
        "background-size": size,
      }}
    >
      <div className={styles.noOverflow}>
        <div
          id="image"
          style={{
            "background-color": primaryColor,
            "background-image": pattern,
            "background-size": size,
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
        togglePatterns={togglePatterns}
        patterns={patterns}
      />
      <div className={styles.githubMobile}>
        <GithubButton secondaryColor={secondaryColor} />
      </div>
    </div>
  );
}

export default Playground;
