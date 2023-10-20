import React, { useEffect, useState } from "react";

import "./App.css";
import Playground from "./Components/Playground";
import { randomColorGenerator } from "./Utilities/UtilityFunctions";

function App() {
  const [primaryColor, setPrimaryColor] = useState();
  const [secondaryColor, setSecondaryColor] = useState();
  const [generateGradient, setGenerateGradient] = useState(false); // State to track gradient generation

  const getRandomColors = (e) => {
 
  if (generateGradient) {
      // Generate a contrasting gradient
      const gradient = generateContrastingGradient();
      setPrimaryColor(gradient.primary);
      setSecondaryColor(gradient.secondary);
    } else {
      // Generate solid colors with contrasting colors 
      var { primary, secondary } = randomColorGenerator(e);
      setPrimaryColor(primary);
      setSecondaryColor(secondary);
    };
  useEffect(() => {
    function watchSpace(e) {
      if(e.keyCode === 32) getRandomColors()
    } [generateGradient]); // // Trigger the effect when the gradient toggle changes
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
      getRandomColors={getRandomColors} />
    <label>
          Generate Gradient
          <input
            type="checkbox"
            checked={generateGradient}
            onChange={() => setGenerateGradient(!generateGradient)} />
        </label>
      </div>
    );
  };
}

export default App;
