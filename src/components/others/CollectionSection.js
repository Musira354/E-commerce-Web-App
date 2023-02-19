import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CollectionCard from "./CollectionCard";
import { collectionSectionCardData } from "../data/collectionData";
import axios from "axios";


const CollectionSection = () => {

  return (
    <section className="CollectionSection">
      <Container>
        <Row>
          {collectionSectionCardData.map((item) => (
            <Col lg>
              <CollectionCard
                image={item.img}
                tag={item.tag}
                heading={item.heading}
                link={item.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CollectionSection;
