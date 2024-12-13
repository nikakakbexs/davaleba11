import React from "react";
import "./NavigationContainer.css";
import "../Slideshow/Slideshow.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const NavigationContainer = ({
  images,
  currentImageIndex,
  onPrevImage,
  onNextImage,
}) => {
  return (
    <div className="navigationContainer">
      <ProgressBar currentImageIndex={currentImageIndex} images={images} />
      <div className="emptyBar"></div>
      <div className="navigationTitle">
        <h2>{images[currentImageIndex].name}</h2>
        <p>{images[currentImageIndex].artist.name}</p>
      </div>
      <div className="navigationButtons">
        <button onClick={onPrevImage}>
          <img src="/images/shared/icon-back-button.svg" alt="back button" />
        </button>
        <button onClick={onNextImage}>
          <img src="/images/shared/icon-next-button.svg" alt="next button" />
        </button>
      </div>
    </div>
  );
};

export default NavigationContainer;
