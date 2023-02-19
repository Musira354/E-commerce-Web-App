import React from "react";

const CollectionCard = (props) => {
  return (
    <div className="CollectionCard">
      <div className="darkOverlay"></div>
      <img className="CollectionImg" src={props.image} alt="" />
      <div className="collectionCardDetails">
        {props.tag !== "" ? (
          <span className="collectionCardTag">{props.tag}</span>
        ) : (
          ""
        )}
        <div className="collectionCardHeading">{props.heading}</div>
        <a href="#" className="collectionCardBtn">
          {props.link}
        </a>
      </div>
    </div>
  );
};

export default CollectionCard;
