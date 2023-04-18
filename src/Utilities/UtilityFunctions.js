export const randomColorGenerator = (hex) => {
  const primary = typeof hex == "string" ? parseInput(hex) : primaryColor();
  const secondary = secondaryColor(primary);
  return { primary, secondary };
};

//generate a random color for every refresh
const primaryColor = () => {
  const color =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
  return color;
};

//get a contrast color according to the background for better visibility
const secondaryColor = (primary) => {
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
