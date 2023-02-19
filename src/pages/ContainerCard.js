import React from 'react'
import '../App.css'
import './LoginPage.css'

const ContainerCard = (props) => {
  console.log('in card')
  return (
    <div className="LoginPage">
      <div className="limiter">
        <div className=" container-login100">
          <div className="container">
            <div className=" wrap-login100">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContainerCard
