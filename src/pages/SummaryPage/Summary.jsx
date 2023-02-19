import React from 'react'
import { Container } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import { ArrowLeftOutlined } from '@ant-design/icons'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TextField from '@mui/material/TextField'
import { useNavigate, Navigate } from 'react-router-dom'

import dpd from '../../assets/images/summary-dpd.svg'
import Button from '@mui/material/Button'
import { Card, Col, Row } from 'antd'
import CartListCard from '../CartPage/CartListCard'
import Chip from '@mui/material/Chip'
import PaymentMethod from './PaymentMethod'
import SummaryCart from './SummaryCart'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 90px;
  align-items: center;
  margin-bottom: 2em;
`

const gridStyle = {
  width: '25%',
  textAlign: 'center',
}

const CartWrap = styled.div``

const handleClick = () => {
  console.info('You clicked the Chip.')
}

const Summary = () => {
  const [totalcost, setTotalCost] = React.useState(40.0)
  const navigate = useNavigate()
  const delivery_data = [
    {
      id: 1,
      name: 'Beatrice Waddle',
      address: '1391 Single Street',
      city: 'Chicago',
      zip: 'MA 02129',
      country: 'USA',
      phone_number: '+5 781-644-3627',
      email: 'BeatriceLWaddle@rhyta.com',
    },
  ]

  return (
    <section className="Cart">
      <Container>
        cart
        <Wrapper>
          <div className="cart-bold cart-h1">Summary</div>
          <div className="Cart-icons space-between">
            <ShoppingCartOutlinedIcon
              sx={{
                'background-color': '#DBDBDB',
                padding: '0 6px',
                'border-radius': '111px',
                'font-size': '1.2rem',
                'background-color': 'white',
                width: '1.5em',
                height: '1.5em',
                color: 'black',
              }}
            />
            <LocalShippingOutlinedIcon
              sx={{
                'background-color': '#DBDBDB',
                padding: '8px',
                'border-radius': '111px',
                'font-size': '1.2rem',
                'background-color': ' black',
                width: '1.8em',
                height: '1.7em',
                color: 'white',
              }}
            />
          </div>
        </Wrapper>
        <div class="row gy-5 justify-content-between">
          <div class="col-sm-9 col-md-7 col-lg-5 col-xl-4 col-xxl-4">
            <Row gutter={[16, 24]}>
              <Col span={24} className="cart-bold">
                Payment Method
              </Col>
              <Col span={24} className="cart-bold">
                <PaymentMethod />
              </Col>
            </Row>
          </div>
          <div class="col-md-3 col-lg-2 col-xl-2 col-xxl-2">
            <Row gutter={[16, 24]}>
              <Col span={24} className="cart-bold">
                Delivery Method
              </Col>
              <Col>
                <Row gutter={[40, 16]}>
                  <Col span={24}>
                    <div className="summary-delivery-card">
                      <img src={dpd} style={{ 'margin-bottom': '30px' }}></img>
                      <div className="cart-bold-font summary-delivery-card-price">
                        $12.00
                      </div>
                      <div className="cart-grey-font cart-small-font">
                        Cash on delivery
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="flex-col">
                  <Button
                    variant="contained"
                    size="small"
                    style={{
                      'background-color': 'black',
                      'border-radius': '30px',
                      padding: '8px 45px',
                      'font-weight': 'bold',
                      'font-size': '0.7em',
                      width: '10%',
                      top: '-1.2em',
                    }}
                    onClick={() => navigate('select-address')}
                  >
                    CHANGE
                  </Button>
                </div>
              </Col>
              
            </Row>
          </div>

          <div class="  col-md-4 col-lg-2 col-xl-3 col-xxl-4 ">
            <Row gutter={[16, 24]}>
              <Row>
                <Col span={24} className="cart-bold">
                  Address Delivery
                </Col>
              </Row>
              <Row className="cart-small-font">
                <Col span={24}>{delivery_data[0].name}</Col>
                <Col span={24}>
                  {delivery_data[0].address}, {delivery_data[0].city},
                  {delivery_data[0].zip}
                </Col>
                <Col span={24}>{delivery_data[0].country}</Col>
                <Col span={24}>{delivery_data[0].phone_number}</Col>
                <Col span={24}>{delivery_data[0].email}</Col>
              </Row>
            </Row>
          </div>
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <Row gutter={[16, 16]}>
              <Col span={24} className="cart-bold">
                Your Cart
              </Col>
              <Col span={24} className="cart-bold">
                <SummaryCart />
              </Col>
            </Row>
          </div>
        </div>
        <div className="spaceSection">
          <Row
            gutter={[16, 16]}
            style={{
              display: 'flex',
              'justify-content': 'flex-start',
              'align-items': 'center',
              'font-size': 'smaller',
              color: '#000',
            }}
          >
            <Col
              xs={{ span: 3 }}
              sm={{ span: 3 }}
              md={{ span: 1 }}
              lg={{ span: 4 }}
              xl={{ span: 3 }}
              xxl={{ span: 6 }}
              style={{ padding: '0' }}
            >
              <div className="cart-goback-btn cart-bold">
                <ArrowBackIcon
                  style={{ color: '#000', height: '1.2rem', cursor: 'pointer' }}
                  onClick={() => navigate(-1)}
                />
                <div>BACK</div>
              </div>
            </Col>

            <Col
              xs={{ span: 6, offset: 4 }}
              sm={{ span: 6, offset: 4 }}
              md={{ span: 4, offset: 10 }}
              lg={{ span: 4, offset: 8 }}
              xl={{ span: 4, offset: 9 }}
              xxl={{ span: 3, offset: 2 }}
              style={{
                display: 'flex',
                'flex-direction': 'row',
                'justify-content': 'space-around',
              }}
            >
              Total Cost:
              <div className="cart-bold-font">${totalcost}</div>
            </Col>

            <Col
              xs={{ span: 8, offset: 1 }}
              sm={{ span: 9, offset: 1 }}
              md={{ span: 7, offset: 1 }}
              lg={{ span: 5, offset: 1 }}
              xl={{ span: 5, offset: 1 }}
              xxl={{ span: 4, offset: 1 }}
              span={4}
              offset={1}
            >
              <Button
                variant="contained"
                size="medium"
                style={{
                  'background-color': 'black',
                  'border-radius': '30px',
                  padding: '12px 45px',
                  'font-weight': 'bold',
                  'font-size': '0.9em',
                  width: '100%',
                }}
                onClick={() => navigate('select-address')}
              >
                CONFIRM ORDER
              </Button>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Summary
