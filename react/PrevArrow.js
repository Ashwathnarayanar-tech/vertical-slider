import React from 'react';
import styles from "./VerticalSlider.css";
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = ['leftArrowHead']

function PrevArrow(props) {
  const handles = useCssHandles(CSS_HANDLES)
  return (
    <div className={styles.buttonContainer}>
    <button onClick={props.onClick} className={styles.prevButton}><span className={handles.leftArrowHead}>&#60;</span></button>
   </div>
  );
}
export default PrevArrow
