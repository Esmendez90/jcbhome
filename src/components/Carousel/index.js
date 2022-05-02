import React from "react";
import { Carousel } from "react-bootstrap";
import images from "./images.json";

function CarouselComponent() {
  return (
    <Carousel>
      {images.map(({ id, className, src, alt }) => (
        <Carousel.Item key={id}>
          <img className={className} src={src} alt={alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
export default CarouselComponent;
