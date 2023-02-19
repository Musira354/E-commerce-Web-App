import React from 'react'
import { MinusOutlined, PlusOutlined, CloseOutlined  } from '@ant-design/icons'
import { Button , Col, Row } from 'antd'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  margin-top: 35px;
`
const SummaryCart = () => {
  const data = [
    {
      id: 1,
      image: 'http://34.253.31.99/site/upload/product_image/1653660135-0.jpg',
      tag: '',
      name: 'Adidas Men essential gradient logo Short',
      price: '$29.99',
      color: 'Black',
      size: 'M',
    },
    ,
    {
      id: 2,
      image: 'http://34.253.31.99/site/upload/product_image/1653662471-0.jpg',
      tag: '',
      name: 'Giordano Trouser',
      price: '$16.99',
      color: 'Grey',
      size: 'M',
    },
  ]
  return (
    <div class="row ">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        {data.map((product) => (
          <Wrapper >
          <Row
            gutter={[16, 16]}
            style={{
              display: 'flex',
              'justify-content': 'flex-start',
              'align-items': 'baseline',
              'font-size': 'small',
               
            }}
          >
            <Col sm={{ span: 4 }} md={{ span: 3 }} span={3}>
              <img className="cart-product-image" src={product.image} alt="" />
            </Col>
            <Col sm={{ span: 11 }}  md={{ span: 12 }} span={7}>
              <div className="cart-product-name ">
                <div className="cart-bold-font product-name">{product.name}</div>
                <div className="cart-grey-font product-id">{product.id}</div>
              </div>
            </Col>
            <Col span={3}>
              <div>{product.color}</div>
            </Col>
            <Col span={2}>
              <div></div>
              {product.size}
            </Col>
            
            <Col span={4}>
              <div className="cart-bold-font cart-product-price ">{product.price}</div>
            </Col>
            
          </Row>
          </Wrapper>
      
        ))}
      </div>
    </div>
  )
}

export default SummaryCart
