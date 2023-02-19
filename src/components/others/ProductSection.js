import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProducstCard from "./ProductsCard";
import { dataItem } from "../data/productData";



function ProductSection() {



  return (
    <section className="ProductSection">
      <Container>
        <div className="recommendedHeading">Recently Added Products</div>
        <Row>
          {dataItem.map((item) => (
            <Col >
              <ProducstCard
                image={item.img}
                tag={item.tag}
                title={item.title}
                des={item.des}
              />
            </Col>
          ))}
          
        </Row>
        
      </Container>
    </section>
  );
}

export default ProductSection;
