import React, { useEffect, useRef } from "react";
import "./Gallery.css";
import galleryData from "../../data.js";
import { Link } from "react-router-dom";

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const galleryItems = galleryRef.current.querySelectorAll(".galleryItem");
    let delay = 0.03;
    galleryItems.forEach((item) => {
      item.style.animationDelay = delay + "s";
      delay += 0.04;
    });
  }, []);

  return (
    <main>
      <div className="gallery" ref={galleryRef}>
        {galleryData.map((item) => (
          <Link
            className="galleryItem"
            to={`/slideshow/${item.id}`}
            key={item.name}
            onClick={() => console.log("Clicked item ID:", item.id)}
          >
            <div className="Wrapper"></div>
            <img src={item.images.thumbnail} alt={item.name} />
            <div className="textContainer">
              <h2>{item.name}</h2>
              <p>{item.artist.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Gallery;
