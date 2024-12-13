import React, { useEffect, useState } from "react";
import './ProgressBar.css';

const ProgressBar = ({ currentImageIndex, images }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    setProgress(((currentImageIndex + 1) / images.length) * 100);
  }, [currentImageIndex, images]);

  return (
    <div className="progressBar" style={{ width: `${progress}%` }}></div>
    
  );
};

export default ProgressBar;
