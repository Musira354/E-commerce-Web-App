import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function SubscribeSection(props) {
  return (
    <section className="SubscribeSection">
      <Container>
        <Row>
          <Col lg={6}>
            <h1 className="subscribeHeading">
              Subscribe to our newsletter and receive exclusive offers every
              week
            </h1>
          </Col>
          <Col className="my-5 my-lg-0" lg={4}>
            <input
              className="modalInput"
              type="email"
              placeholder="enter your email"
            />
          </Col>
          <Col lg={2}>
            <a href="#" class="collectionCardBtn yellow">
              Subscribe
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SubscribeSection;
