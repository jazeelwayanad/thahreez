import React from "react";
import "./DefaultSlideShow.css";
import { Carousel } from "react-bootstrap";

const posters = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
];
function DefaultSlideshow() {
  return (
    <Carousel>
      {posters.map((data, index, array) => (
        <Carousel.Item data-ride="carousel" data-interval="100">
          <img
            className="d-block w-100"
            src={`/images/POST${array.length - 1 - index + 1}.jpg`}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DefaultSlideshow;
