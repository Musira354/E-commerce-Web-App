import React from 'react'
import { Container } from 'react-bootstrap'
import styled, { css } from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import { ArrowLeftOutlined } from '@ant-design/icons'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import TextField from '@mui/material/TextField'
import { useNavigate, Navigate } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Button from '@mui/material/Button'
import { Col, Row } from 'antd'
import CartListCard from '../CartPage/CartListCard'
import WishListCard from './WishlistProductCard'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 6em;
  align-items: center;
`

const CartWrap = styled.div`
  height: 20em;
`

const Wishlist = () => {
  const [totalcost, setTotalCost] = React.useState(159.0)
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
  return (
    <section className="Wishlist">
      
        <Wrapper>
          <div className="cart-bold wishlist-heading">
            My Wishlist
            <FavoriteBorderIcon
              style={{ 'margin-left': '.5em', 'font-size': '1em' }}
            />
          </div>
        </Wrapper>
        <div className=" top-gap">
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
            <Col span={24}>Product</Col>
          </Row>
        </div>
        <CartWrap>
          {data.map((product) => (
            <WishListCard
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
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
            <Col span={24} style={{ padding: '0' }}>
              <div className="wishlist-goback-btn cart-bold">
                <ArrowBackIcon
                  style={{ color: '#000', height: '1.2rem', cursor: 'pointer' }}
                  onClick={() => navigate(-1)}
                />
                <div>go back to shopping</div>
              </div>
            </Col>
          </Row>
        </div>
    
    </section>
  )
}

export default Wishlist
