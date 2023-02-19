import React from 'react'
import maestro from '../../assets/images/summary-1.svg'
import mastercard from '../../assets/images/summary-2.svg'
import visa from '../../assets/images/summary-visa.svg'
import paypal from '../../assets/images/summary-paypal.svg'
import ideal from '../../assets/images/summary-ideal.svg'
import discover from '../../assets/images/summary-discover.svg'
import { Card, Col, Row } from 'antd'

const PaymentMethod = () => {
  return (
    <div class="row g-0 gx-sm-4 gx-lg-4 gx-xl-5 gx-xxl-0">
      <div class="p-1 col-4">
        <button class="summary-payment-btn">
          <img src={paypal}></img>
        </button>
      </div>
      <div class="p-1 col-4">
        <button class="summary-payment-btn">
          <img src={visa}></img>
        </button>
      </div>
      <div class="p-1 col-4">
        <button class="summary-payment-btn">
          <img src={mastercard}></img>
        </button>
      </div>
      <div class="p-1 col-4">
        <button class="summary-payment-btn">
          <img src={maestro}></img>
        </button>
      </div>
      <div class="p-1 col-4">
        <button class="summary-payment-btn">
          <img src={discover}></img>
        </button>
      </div>
      <div class="p-1 col-4">
        <button class="summary-payment-btn">
          <img src={ideal}></img>
        </button>
      </div>
    </div>
  )
}

export default PaymentMethod
