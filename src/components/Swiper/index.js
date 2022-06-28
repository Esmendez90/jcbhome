import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

export function Swiper() {
  return (
    <>
      <Carousel interval={1}>
        <Carousel.Item>
          <img
            className="d-block w-100 jcbslide"
            src="/images/jcbslide.png"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/kwslide.png"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/jcbmotto.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/kwmotto.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
