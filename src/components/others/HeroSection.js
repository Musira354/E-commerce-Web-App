import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselNumbers from "../carousel/CarouselNumbers";
import Services from "./Services";

// ✅ Import images
import carouselImg1 from "../../assets/images/carouselImg1.jpg";
import carouselImg2 from "../../assets/images/carouselImg2.jpg";
import carouselImg3 from "../../assets/images/carouselImg3.jpg";
import carouselImg4 from "../../assets/images/carouselImg4.jpg";

function HeroSection() {
  const [current, setCurrent] = React.useState(1);

  const handleCarousel = (e) => {
    setCurrent(e + 1);
  };

  return (
    <section className="HeroSection">
      <Carousel onSlide={handleCarousel}>
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImg1}
            alt="Summer collection 1"
          />
          <div className="carouselNumbersSub">
            <h1 className="mianHeading">
              Sale of the summer <br /> collection
            </h1>
            <a className="moreLink" href="/">
              <i className="fas fa-arrow-right"></i> Check More
            </a>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImg2}
            alt="Summer collection 2"
          />
          <div className="carouselNumbersSub">
            <h1 className="mianHeading">
              Sale of the summer <br /> collection
            </h1>
            <a className="moreLink" href="/">
              <i className="fas fa-arrow-right"></i> Check More
            </a>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImg3}
            alt="Summer collection 3"
          />
          <div className="carouselNumbersSub">
            <h1 className="mianHeading">
              Sale of the summer <br /> collection
            </h1>
            <a className="moreLink" href="/">
              <i className="fas fa-arrow-right"></i> Check More
            </a>
          </div>
        </Carousel.Item>

        {/* Slide 4 (optional text-only slide) */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carouselImg4}
            alt="Summer collection 2"
          />
          <div className="carouselNumbersSub">
            <h1 className="mianHeading">
              Sale of the summer <br /> collection
            </h1>
            <a className="moreLink" href="/">
              <i className="fas fa-arrow-right"></i> Check More
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
