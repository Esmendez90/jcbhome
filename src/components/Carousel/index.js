import React from "react";
import { Carousel } from "react-bootstrap";
import images from "./images.json";
import "./style.css"
export function CarouselComponent() {
  return (
    <Carousel fade>
      {images.map(({ id, className, src, alt }) => (
        <Carousel.Item key={id}>
          <img className={className} src={src} alt={alt} />
        </Carousel.Item>
      ))}
    </Carousel>

    
  );
};
