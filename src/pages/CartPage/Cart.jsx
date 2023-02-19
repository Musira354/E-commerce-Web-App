import React from 'react'
import { Container } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import { ArrowLeftOutlined } from '@ant-design/icons'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TextField from '@mui/material/TextField'
import { useNavigate, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import { Col, Row } from 'antd'
import CartListCard from './CartListCard'



const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 90px;
  align-items: center;
`

const CartWrap = styled.div``

const Cart = () => {
  const [totalcost, setTotalCost] = React.useState(159.0)
  const state = useSelector((state) => state.handleCart);
  const dispatch= useDispatch()

  console.log('state CART', state);
  const navigate = useNavigate()
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

  const getTotalPrice = () => {

    let total = 0
  
    Cart.forEach(item => {
  
      total += item.price
  
    })
  
    return total
  
  }

  return (
    <section className="Cart">
        <Wrapper>
          <div className="cart-bold cart-h1">Shopping Cart</div>
          <div className="Cart-icons space-between">
            <ShoppingCartOutlinedIcon
              sx={{
                'background-color': '#DBDBDB',
                padding: '0 6px',
                'border-radius': '111px',
                'font-size': '1.2rem',
                'background-color': ' black',
                width: '1.5em',
                height: '1.5em',
                color: 'white',
              }}
            />
            <LocalShippingOutlinedIcon
              sx={{
                'background-color': '#DBDBDB',
                padding: '8px',
                'border-radius': '111px',
                'font-size': '1.2rem',
                'background-color': ' white',
                width: '1.8em',
                height: '1.7em',
                color: 'black',
              }}
            />
          </div>
        </Wrapper>
        <div className="cart-product-description">
          <Row
            gutter={[16, 16]}
            style={{
              display: 'flex',
              'justify-content': 'flex-start',
              'align-items': 'baseline',
              'font-size': 'small',
              'font-weight': '600',
              color: '#c1c1c1',
            }}
          >
            <Col sm={{span:8}} md={{span:8}}  span={9}>Product</Col>

            <Col span={3}>Color</Col>
            <Col span={3}>Size</Col>
            <Col sm={{span:6}} md={{span:5}} span={4}>Amount</Col>
            <Col  span={4}>Price</Col>
          </Row>
        </div>
        <CartWrap>
          {state.map((product) => (
            <CartListCard
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              color={product.color}
              size={product.size}
              product={product}
            />
          ))}
        </CartWrap>
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
              sm={{ span: 4 }}
              md={{ span: 5 }}
              lg={{ span: 4 }}
              xl={{ span: 3 }}
              xxl={{ span: 3 }}
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
              xs={{ span: 12, offset: 3 }}
              sm={{ span: 7, offset: 0 }}
              md={{ span: 8, offset: 1 }}
              lg={{ span: 6, offset: 4 }}
              xl={{ span: 6, offset: 5 }}
              xxl={{ span: 5, offset: 6 }}
            >
              <input
                class="cart-input "
                type="search"
                placeholder="Promo Code"
              ></input>
            </Col>
            <Col
              xs={{ span: 5, offset: 0 }}
              sm={{ span: 2, offset: 0 }}
              md={{ span: 3, offset: 0 }}
              lg={{ span: 2, offset: 1 }}
              xl={{ span: 2, offset: 1 }}
              xxl={{ span: 3, offset: 1 }}
            >
              Total Cost:
              <div className="cart-bold-font">${totalcost}</div>
            </Col>
            <Col
              xs={{ span: 18, offset: 4 }}
              sm={{ span: 10, offset: 0 }}
              md={{ span: 7, offset: 0 }}
              lg={{ span: 6, offset: 1 }}
              xl={{ span: 6, offset: 1 }}
              xxl={{ span: 5, offset: 1 }}
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
    </section>
  )
}

export default Cart
