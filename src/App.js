import React, { useEffect, useState } from "react";

import "./App.css";
import Playground from "./Components/Playground";
import { randomColorGenerator } from "./Utilities/UtilityFunctions";

function App() {
  const [primaryColor, setPrimaryColor] = useState();
  useEffect(() => {
    setPrimaryColor(randomColorGenerator());
  }, []);

  return <Playground primaryColor={primaryColor} />;
}

export default App;
