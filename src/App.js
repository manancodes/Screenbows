import React, { useEffect, useState } from "react";

import "./App.css";
import Playground from "./Components/Playground";
import { randomColorGenerator } from "./Utilities/UtilityFunctions";

function App() {
  const [primaryColor, setPrimaryColor] = useState();
  const [secondaryColor, setSecondaryColor] = useState();

  const getRandomColors = (e) => {
    var { primary, secondary } = randomColorGenerator(e);
    setPrimaryColor(primary);
    setSecondaryColor(secondary);
  };
  useEffect(() => {
    function watchSpace(e) {
      if(e.keyCode === 32) getRandomColors()
    }
    window.addEventListener("keydown", watchSpace)
    return function() {
        // Cleaning up...
        window.removeEventListener("keydown", watchSpace)
        getRandomColors();
    }
  }, []);

  return (
    <Playground
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      getRandomColors={getRandomColors}
    />
  );
}

export default App;
