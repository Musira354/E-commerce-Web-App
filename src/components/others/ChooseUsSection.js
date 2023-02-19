import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ChooseUsCard from "./ChooseUsCard";
import { chooseUsData } from "../data/chooseUsSectionData";

function ChooseUsSection() {
  return (
    <section className="ChooseUsSection">
      <Container>
        <div className="recommendedHeading text-center mb-5 pb-4">
          Why should you choose us?
        </div>
        <Row>
          {chooseUsData.map((item) => (
            <Col lg>
              <ChooseUsCard
                image={item.img}
                heading={item.heading}
                text={item.text}
              />
            </Col>
          ))}
        </Row>
        <ChooseUsCard />
      </Container>
    </section>
  );
}

export default ChooseUsSection;
