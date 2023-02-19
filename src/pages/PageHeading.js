import React from 'react'
import '../App.css'
import './LoginPage.css'

function PageHeading(props) {
  return (
    <div className="LoginPage">
      <div className="LoginPage justify-content-center">
        <div className="text-center">
          <div className="heading">{props.heading}</div>
          <div className="loginText">{props.text}</div>
        </div>
      </div>
    </div>
  )
}

export default PageHeading
