import React from 'react'
import { MinusOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import styled, { css } from 'styled-components'
import CloseButton from 'react-bootstrap/CloseButton'
import Button from '@mui/material/Button'


const Wrapper = styled.div`
  margin-top: 35px;
`
const ButtonGroup = Button.Group

const WishListCard = (props) => {

  

  return (
    <Wrapper>
      <Row
        gutter={[16, 20]}
        style={{
          display: 'flex',
          'justify-content': 'flex-start',
          'align-items': 'baseline',
          'font-size': 'small',
        }}
      >
        <Col xs={{span:3}} span={2}>
          <img className="cart-product-image" src={props.image} alt="" />
        </Col>
        <Col xs={{span:19, offset:2}} sm={{span:7, offset:1}} md={{span:8, offset:1}}  >
          <div className="cart-product-name ">
            <div className="cart-bold-font product-name">{props.name}</div>
            <div className="cart-grey-font product-id">{props.id}</div>
          </div>
        </Col>
       

        <Col  xs={{span:14, offset:4}} sm={{span:9, offset:1}} md={{span:7, offset:3}} lg={{span:7, offset:3}} >
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
              
            >
              ADD TO CART
            </Button>
            
          
        </Col>
        <Col xs={{span:1, offset:1}} sm={{span:1, offset:1}} >
          <CloseOutlined style={{ color: '#000' }} />
        </Col>
      </Row>
    </Wrapper>
  )
}

export default WishListCard
