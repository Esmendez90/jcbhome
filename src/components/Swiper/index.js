import React from "react";
import { Carousel } from "react-bootstrap";
import images from "./images.json";
import "./style.css";

export function Swiper() {
  return (
    <>
      <Carousel interval={1}>
        {images.map(({ id, className, src, alt }) => (
          <Carousel.Item key={id}>
            <img className={className} src={src} alt={alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
