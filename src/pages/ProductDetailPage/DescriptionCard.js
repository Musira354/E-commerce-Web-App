import React from 'react'

function DescriptionCard (props) {
  return (
    <div className="DescriptionCard">
      <img className="descriptionCardImg" src={props.image} alt="" />
      <div className="detailsHeading">{props.heading}</div>
      <div className="detailsText">{props.text}</div>
    </div>
  )
}

export default DescriptionCard
