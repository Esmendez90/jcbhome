import React from "react";
import { Carousel } from "react-bootstrap";
import images from "./images.json";

export function CarouselComponent2() {
  return (
    <Carousel fade>
      {images.map(({ id, className, src, alt, header1, text, text2 }) => (
        <Carousel.Item key={id}>
          <img className={className} src={src} alt={alt} />
          <section>
            <div className="text-header-container services-text-header">
              <h1>
                {header1}
              </h1>
              <div className="services-text-container">
                <p>{text}</p>
                <p>{text2}</p>
              </div>
            </div>
          </section>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
