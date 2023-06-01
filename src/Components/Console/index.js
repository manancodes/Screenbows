import React from "react";
import styles from "./console.module.css";
import { parseDisplayValue } from "../../Utilities/UtilityFunctions";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

export default function Console(props) {
  var { primaryColor, getRandomColors } = props;
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
      <div className={styles.colorControls}>
        <button
          onClick={getRandomColors}
          className={`${styles.newColorBtn} ${styles.button}`}
        >
          <span
            style={{ color: "white" }}
            className="material-symbols-outlined"
          >
            shuffle
          </span>
        </button>
        <div className={styles.box} onClick={props?.opener}>
          <p>hex code</p>
          <div className={`${styles.inputContainer} ${styles.hexbox}`}>
            <span className={styles.hexspan}>#</span>
            <input
              className={`${styles.hexinput} ${styles.input}`}
              maxLength="7"
              //this will remove the hashtag(#)
              value={primaryColor ? parseDisplayValue(primaryColor) : ""}
              onChange={(e) => {
                getRandomColors(e.target.value);
              }}
            />
          </div>
        </div>
        <button onClick={downloadHandler} className={styles.downloadBtn}>
          DOWNLOAD
        </button>
      </div>
    </div>
  );
}
