import React, { useState, useEffect } from "react";
import styles from "./console.module.css";
import { parseDisplayValue } from "../../Utilities/UtilityFunctions";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { SketchPicker } from "react-color";

export default function Console(props) {
  var { primaryColor, getRandomColors, handleColorChange } = props;

  // State to handle color-picker pop-up
  const [showColorPicker, setShowColorPicker] = useState(false);
  // Function to open the color picker
  const openColorPicker = (e) => {
    e.stopPropagation();
    setShowColorPicker(true);
  };
  // Function to close the color picker
  const closeColorPicker = () => {
    setShowColorPicker(false);
  };
  // A click event listener to the document for closing the color-picker pop-up
  useEffect(() => {
    document.addEventListener('click', closeColorPicker);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', closeColorPicker);
    };
  }, []);

  const downloadHandler = (event) => {
    event.preventDefault();
    console.log(primaryColor.length, primaryColor);
    if (primaryColor.length !== 7) {
      alert("Please enter a valid Hex");
      return;
    }
    domtoimage
      .toBlob(document.getElementById("image"))
      .then((blob) =>
        saveAs(blob, `${primaryColor.toUpperCase()}_Background.jpg`)
      );
  };
  return (
    <div className={styles.console}>
      {/* For mobile alignment */}
      <div className={styles.upperbox}>
        {/* Random Color Button */}
        <button
          onClick={getRandomColors}
          className={`${styles.newColorBtn} `}
        >
          <span
            style={{ color: "white", padding: 0 }}
            className="material-symbols-outlined"
          >
            shuffle
          </span>
        </button>
        {/* Hex Input Box */}
        <div className={styles.box} onClick={props?.opener} style={{position: 'relative'}}>
          <p>hex code</p>
          <div className={`${styles.inputContainer} ${styles.hexbox}`} onClick={openColorPicker}>
            <span className={styles.hexspan}>#</span>
            <input
              className={`${styles.hexinput}`}
              maxLength="7"
              //this will remove the hashtag(#)
              value={primaryColor ? parseDisplayValue(primaryColor) : ""}
              onChange={(e) => {
                getRandomColors(e.target.value);
              }}
            />
          </div>
          {
            // Display color picker if showColorPicker=true
            showColorPicker && (
              <div
                className={styles.colorPicker}
                onClick={openColorPicker}
              >
                <SketchPicker
                  color={primaryColor}
                  onChange={handleColorChange}
                />
              </div>
            )
          }
        </div>
      </div>
      {/* Size Controls */}
      <div className={styles.dimensionsbox}>
        <div className={styles.box}>
          <p>height</p>
          <div className={styles.inputBox}>
            <input
              className={styles.right}
              name="height"
              maxLength={4}
              onChange={props.changeDimensions}
              value={props.dimensions.height}
            />
            <span>px</span>
          </div>
        </div>
        <div className={styles.box}>
          <p>width</p>
          <div className={styles.inputBox}>
            <input
              className={styles.right}
              name="width"
              maxLength={4}
              onChange={props.changeDimensions}
              value={props.dimensions.width}
            />
            <span>px</span>
          </div>
        </div>
      </div>
      {/* Random Pattern Button */}
      <div className={styles.box}>
        <p className={styles.patterns}>patterns</p>
        <button onClick={props.togglePatterns} className={styles.patternBtn}>
          <div className={`${styles.toggleContainer}`}>
            <div
              className={`${styles.toggleSwitch} ${
                props.patterns ? styles.on : styles.off
              }`}
            ></div>
          </div>
        </button>
      </div>

      {/* Download Button */}
      <button onClick={downloadHandler} className={styles.downloadBtn}>
        DOWNLOAD
      </button>
    </div>
  );
}
