import React, { useEffect, useState } from "react";

import "./App.css";
import Playground from "./Components/Playground";
import { randomColorGenerator } from "./Utilities/UtilityFunctions";

function App() {
  const [primaryColor, setPrimaryColor] = useState();
  const [secondaryColor, setSecondaryColor] = useState();

  useEffect(() => {
    var { primary, secondary } = randomColorGenerator();
    setPrimaryColor(primary);
    setSecondaryColor(secondary);
  }, []);

  return (
    <Playground primaryColor={primaryColor} secondaryColor={secondaryColor} />
  );
}

export default App;
