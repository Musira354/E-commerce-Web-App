import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselNumbers from "../carousel/CarouselNumbers";
import Services from "./Services";


function HeroSection () {
  const [current, setCurrent] = React.useState(1);
 

  const handleCarousel = (e) => {
    setCurrent(e + 1);
  };


  return (
    <section className="HeroSection">
      <Carousel onSlide={handleCarousel}>
        <Carousel.Item>
          <div className="carouselNumbersSub">
            <h1 className="mianHeading">
              Sale of the summer <br /> collection
            </h1>
            <a className="moreLink" href="/">
              <i class="fas fa-arrow-right"></i> Check More
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselNumbersSub">
            <h1 className="mianHeading">
              Sale of the summer <br /> collection
            </h1>
            <a className="moreLink" href="/">
              <i class="fas fa-arrow-right"></i> Check More
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="../src/assets/images/carouselImg3.jpg"></img>
          <div className="carouselNumbersSub">
            <h1 className="mianHeading">
              Sale of the summer <br /> collection
            </h1>
            <a className="moreLink" href="/">
              <i class="fas fa-arrow-right"></i> Check More
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carouselNumbersSub">
            <h1 className="mianHeading">
              Sale of the summer <br /> collection
            </h1>
            <a className="moreLink" href="/">
              <i class="fas fa-arrow-right"></i> Check More
            </a>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className="ourServices">
        <Services />
      </div>
      <CarouselNumbers current={("0" + current).slice(-2)} total="04" />
    </section>
  );
}

export default HeroSection;
