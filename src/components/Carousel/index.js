import React from "react";
import {Carousel} from "react-bootstrap";

function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/mecianni.jpg"
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponent;
