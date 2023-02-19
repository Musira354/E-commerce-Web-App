import React from "react";
import TruckIcon from "../../assets/images/truckIcon.png";
import EmojiIcon from "../../assets/images/emojiIcon.png";
import ShieldIcon from "../../assets/images/shieldIcon.png";
import { Row, Col } from "react-bootstrap";
const serviceData = [
  {
    img: "",
    heading: "",
    text: "",
  },
  {
    img: TruckIcon,
    heading: "Fast & Secure Shipping",
    text: "On purchases over $199",
  },
  {
    img: EmojiIcon,
    heading: "99% Satisfied Customers",
    text: "Our clients' opinions speak for themselves",
  },
  {
    img: ShieldIcon,
    heading: "Originality Guaranteed",
    text: "30 days warranty for each product from our store",
  },
];

const Services = () => {
  return (
    <Row>
      {serviceData.map((item) => (
        <Col lg>
          <div className="Services">
            <img className="serviceImage" src={item.img} alt="" />
            <div>
              <div className="serviceHeading">{item.heading}</div>
              <div className="serviceText">{item.text}</div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Services;
