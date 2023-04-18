import React, { useEffect, useState } from "react";

import "./App.css";
import Playground from "./Components/Playground";
import { randomColorGenerator } from "./Utilities/UtilityFunctions";

function App() {
  const [primaryColor, setPrimaryColor] = useState();
  const [secondaryColor, setSecondaryColor] = useState();

  const getRandomColors = (hex) => {
    console.log(hex);
    var { primary, secondary } = randomColorGenerator(hex);
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
    />
  );
}

export default App;
