import React from "react";
import styles from "./console.module.css";
import { parseDisplayValue } from "../../Utilities/UtilityFunctions";

export default function Console(props) {
  var { primaryColor, getRandomColors } = props;

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
      </div>
    </div>
  );
}
