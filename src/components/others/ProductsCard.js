import React from "react";


const ProducstCard = (props) => {
  return (
    <section className="ProductSection">
      <div className="productCard">
        {props.tag !== "" ? (
          <span class="collectionCardTag">{props.tag}</span>
        ) : (
          ""
        )}.
        <img className="productCardImg" src={props.image} alt="" />
        <div className="productCardFooter">
          <div className="productCardHeading">{props.title}</div>
          <p className="productCardText">{"$"+props.des}</p>
        </div>
      </div>
    </section>
  );
};

export default ProducstCard;
