import React,{ useRef } from 'react'
import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import styles from "./VerticalSlider.css";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';


const VerticalSlider = (props) => {

  var settings = {
    vertical:true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

  return (
         <div className={styles.sliderWrapper}>
         <Slider {...props.settings} {...settings} className={styles.SliderContainer}>
          {props.arrayOfImages.map((images)=>{
          return(
           <img src={images} style={{height:`${props.imageHeight}`,width:`${props.imageWidth}`}}/>
           )
           })}
          </Slider>
          </div>
          );
          }
export default VerticalSlider


