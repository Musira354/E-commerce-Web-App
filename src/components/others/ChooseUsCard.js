import React from "react";

function ChooseUsCard(props) {
  return (
    <div className="ChooseUsCard">
      <img className="chooseCardImg" src={props.image} alt="" />
      <div className="serviceHeading">{props.heading}</div>
      <div className="serviceText">{props.text}</div>
    </div>
  );
}

export default ChooseUsCard;
