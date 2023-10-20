import React, { useEffect, useState } from "react";

import "./App.css";
import Playground from "./Components/Playground";
import {
  randomColorGenerator,
  randomPattern,
} from "./Utilities/UtilityFunctions";

function App() {
  const [primaryColor, setPrimaryColor] = useState();
  const [secondaryColor, setSecondaryColor] = useState();

  const getRandomColors = (e) => {
    var { primary, secondary } = randomColorGenerator(e);
    setPrimaryColor(primary);
    setSecondaryColor(secondary);
  };
  useEffect(() => {
    getRandomColors();
  }, []);

  return (
    <Playground
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      getRandomColors={getRandomColors}
      randomPattern={randomPattern(primaryColor, secondaryColor)}
    />
  );
}

export default App;
