export const randomColorGenerator = (hex) => {
  const primary = typeof hex == "string" ? parseInput(hex) : makePrimaryColor();
  const secondary = makeSecondaryColor(primary);
  return { primary, secondary };
};

//generate a random color for every refresh
const makePrimaryColor = () => {
  const color =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  return color;
};

//get a contrast color according to the background for better visibility
export const makeSecondaryColor = (primary) => {
  var r = parseInt(primary.substring(1, 3), 16); // hexToR
  var g = parseInt(primary.substring(3, 5), 16); // hexToG
  var b = parseInt(primary.substring(5, 7), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 130 ? "#000000" : "#ffffff";
};

//parse the input by the user for internal use
const parseInput = (hex) => {
  return hex.length === 6 ? "#" + hex : hex;
};

//parse the input by the user for display
export const parseDisplayValue = (val) => {
  var firstLetter = val?.charAt(0);
  var value;
  if (firstLetter === "#") {
    value = val?.substring(1);
  } else if (firstLetter !== "#" && val?.length === 7) {
    value = val?.slice(0, -1);
  } else {
    value = val ? val : undefined;
  }
  return value?.toUpperCase();
};

// get random pattern from a list
export const randomPattern = (primaryColor, secondaryColor) => {
  let temp;
  if (secondaryColor === "#000000") {
    temp = "#ffffff";
  } else {
    temp = "#000000";
  }

  const patterns = [
    {
      name: "linear",
      pattern: `repeating-linear-gradient(
        45deg,
        ${temp},
        ${temp} 10px,
        ${primaryColor} 10px,
        ${primaryColor} 20px
      )`,
    },
    {
      name: "circle",
      pattern: `repeating-radial-gradient(
        circle,
        ${temp},
        ${temp} 10px,
        ${primaryColor} 10px, 
        ${primaryColor} 20px
      )`,
    },
    {
      name: "dots",
      pattern: `radial-gradient(
        circle,
        ${temp},
        ${temp} 50%,
        ${primaryColor} 50%, 
        ${primaryColor}
      )`,
      size: `6px 6px`,
    },
    {
      name: "dots-big",
      pattern: `radial-gradient(
        circle,
        ${temp},
        ${temp} 50%,
        ${primaryColor} 50%, 
        ${primaryColor}
      )`,
      size: `20px 20px`,
    },
  ];

  const randomPatternObject =
    patterns[Math.floor(Math.random() * patterns.length)];

  return randomPatternObject;
};
