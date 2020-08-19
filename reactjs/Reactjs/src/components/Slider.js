import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div className="container">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="image/11.jpg"
                alt="First slide"
                width="250px"
                height="300px"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="image/22.jpg"
                alt="Second slide"
                width="250px"
                height="300px"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="image/33.jpg"
                alt="Third slide"
                width="250px"
                height="300px"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
