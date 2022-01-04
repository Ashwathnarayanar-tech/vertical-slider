import React from 'react';
import styles from "./VerticalSlider.css";
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['rightArrowHead']
function NextArrow(props) {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={styles.buttonContainer}>
    <button onClick={props.onClick} className={styles.nextButton}><span className={handles.rightArrowHead}>&#62;</span></button>
    </div>
  );
}
export default NextArrow
