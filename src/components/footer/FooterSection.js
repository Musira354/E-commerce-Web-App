import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/images/footer-logo.png";

function FooterSection() {
  return (
    <footer className="FooterSection">
      <Container>
        <Row>
          <Col lg={6}>
            <a className="footerBrand" href="#">
              <img src={Logo} alt="" />
            </a>
            <div className="footerText">
              We are an online entity that allows its users to create themselves
              through their own personal style. Boundaries will be broken. We
              will not ask you to choose between two genders.
            </div>
            <a className="socialIcon" href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a className="socialIcon" href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a className="socialIcon" href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a className="socialIcon" href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a className="socialIcon" href="#">
              <i class="fab fa-youtube"></i>
            </a>
          </Col>
          <Col className="mt-4" lg={2}>
            <div className="footerHeading">Shopping online</div>
            <a className="footerLink" href="#">
              Order Status
            </a>
            <a className="footerLink" href="#">
              Shipping and Delivery
            </a>
            <a className="footerLink" href="#">
              Returns
            </a>
            <a className="footerLink" href="#">
              Payment Options
            </a>
            <a className="footerLink" href="#">
              Contact Us
            </a>
          </Col>
          <Col className="mt-4" lg={2}>
            <div className="footerHeading">Shopping online</div>
            <a className="footerLink" href="#">
              Gift Cards
            </a>
            <a className="footerLink" href="#">
              Find a store
            </a>
            <a className="footerLink" href="#">
              Newsletter
            </a>
            <a className="footerLink" href="#">
              Bacome a member
            </a>
            <a className="footerLink" href="#">
              Site feedback
            </a>
          </Col>
          <Col className="mt-4" lg={2}>
            <div className="footerHeading">Shopping online</div>
            <a className="footerLink" href="#">
              info@unfadedapp.com
            </a>
            <div className="footerLink">Hotline: +1 23456789</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default FooterSection;
