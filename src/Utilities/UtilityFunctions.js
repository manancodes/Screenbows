export const randomColorGenerator = () => {
  //generate a random color for every refresh
  const primary =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

  //get a contrast color according to the background for better visibility
  const secondary = (() => {
    var r = parseInt(primary.substring(1, 3), 16); // hexToR
    var g = parseInt(primary.substring(3, 5), 16); // hexToG
    var b = parseInt(primary.substring(5, 7), 16); // hexToB
    return r * 0.299 + g * 0.587 + b * 0.114 > 130 ? "#000000" : "#ffffff";
  })();
  console.log(secondary);
  return { primary, secondary };
};
