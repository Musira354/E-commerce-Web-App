import React from 'react'
import ContainerCard from '../ContainerCard'
import PageHeading from '../PageHeading'
import AddressCard from './AddressCard'
import { useNavigate, Navigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Col, Row } from 'antd'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const SelectAddressPage = () => {
  const navigate = useNavigate()

  return (
    <div className="select-address-section">
      <PageHeading heading="Select Address" />
      <div className="cart-goback-btn cart-bold">
        <ArrowBackIcon
          style={{
            color: 'rgb(255, 255, 255)',
            height: '1.42rem',
            'margin-top': '-120px',
            'margin-left': '1.3em',
            cursor: 'pointer',
          }}
          onClick={() => navigate(-1)}
        />
      </div>
      <div className="limiter"></div>
      <div></div>
      <div className="limiter">
        <div className="container-form">
          <div className="container">
            <div className="wrap">
              <AddressCard />
              <Row gutter={[32, 24]} style={{ 'margin-top': '4em' }}>
                <Col span={12}>
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
                    onClick={() => navigate('add-new-address')}
                  >
                    ADD NEW ADDRESS
                  </Button>
                </Col>
                <Col span={12}>
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
                    onClick={() => navigate('summary')}
                  >
                    CONTINUE TO PAYMENT
                  </Button>
                </Col>
                
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectAddressPage
