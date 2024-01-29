import "./style.css";
import React, { useEffect, useState, createContext } from 'react';
import PropTypes from "prop-types";
import images from "./gallery.json";

import Arrows from "./components/controls/Arrows.js";
import Dots from "./components/controls/Dots.js";

import SlidesList from "./components/SlidesList.js";
import { useResize } from "../../hooks/useResize/useResize.js";

export const SliderContext = createContext();


const Slider = ({ slides, width, height, autoPlay, autoPlayTime }) => {

  const [items, setItems] = useState(images);
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null)

    /*   useEffect(() => {
    const loadData = async () => {
      const images = await getImages();
      setItems(images);
    };
    loadData();
  }, []);*/

  const { isScreenLg } = useResize();

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;
    let getResizeCounter = ( isScreenLg ) ? slides : 1 ;
    if (slide + direction < 0) {
      slideNumber = items.length - getResizeCounter;
    }else if(slide + direction > items.length - getResizeCounter){
      slideNumber = 0;
    } else {
      slideNumber = (slide + direction) % items.length;
    }

    setSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;

    setTouchPosition(touchDown);
  }

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;

    if (direction > 10) {
      changeSlide(1);
    }

    if (direction < -10) {
      changeSlide(-1);
    }

    setTouchPosition(null);
  }

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => {
      clearInterval(interval);
    };
  }, [items.length, slide]); 


  return (
    <div
      style={{ width, height }}
      className="slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
          slides,
        }}
      >
        <Arrows />
        <SlidesList />
        <Dots />
      </SliderContext.Provider>
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.number,
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string
};

Slider.defaultProps = {
  slides: 3,
  autoPlay: false,
  autoPlayTime: 5000,
  width: "100%",
  height: "100%"
};


/*
const Slider = () => {
    const [pictureList, setPictureList] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const list = pictureList.map((picture, pictureIndex) => {
        const {id, image, alt, query} = picture;

        let position = "slide"

        if(pictureIndex === currentIndex) position = 'activeSlide'
        if(pictureIndex - 1 === currentIndex) position = 'nextSlide'
        if(pictureIndex + 1 === currentIndex) position = 'prevSlide'
        if(pictureIndex === pictureList.length - 1 && currentIndex === 0) position = 'prevSlide'
        if(pictureIndex === 0 && currentIndex === pictureList.length - 1) position = 'nextSlide'
        //if(pictureIndex === currentIndex - 1 || (currentIndex === 0 && pictureIndex === pictureList.length - 1)) position = 'lastslide'
            
        return (
            <li className={position} key={id}>
                <img src={image} alt={alt} title={query} />
            </li>
        ) 
    })

    useEffect(()=> {
        const lastSlide = pictureList.length - 1;
        if (currentIndex < 0) setCurrentIndex(lastSlide)
        if (currentIndex > lastSlide) setCurrentIndex(0)
    }, [currentIndex, pictureList]
    )
    


    return (
        <div className="slider">
            <div className="slider-list">
                <ul className="slider-track">
                    {list}
                 </ul>
            </div>
            <div className="slider-arrows">
                <button type="button" className="prev" onClick={() => setCurrentIndex(prevState => prevState - 1)}> &larr; </button>
                <button type="button" className="next" onClick={() => setCurrentIndex(prevState => prevState + 1)}> &rarr; </button>
            </div>
      </div>
    );
  }
  */
  export default Slider;