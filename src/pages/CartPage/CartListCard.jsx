import React from 'react'
import { MinusOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, Col, Row } from 'antd'
import styled, { css } from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import { addCart, delCart } from '../../redux/constants/action-types'

const Wrapper = styled.div`
  margin-top: 35px;
`
const ButtonGroup = Button.Group

const CartListCard = (props) => {
  const [count, setCount] = React.useState(5)
  const state = useSelector((state) => state.handleCart);
  const dispatch= useDispatch()

  const handleClose=(product)=>{
    dispatch(delCart(product))
  }

  const increase = () => {
    setCount(count + 1)
  }
  const onCountChange = (event) => {
    setCount(event.target.value)
    console.log(event.target.value)
  }

  const decline = () => {
    let newCount = count - 1

    if (newCount < 0) {
      newCount = 0
    }

    setCount(newCount)
  }

  return (
    <Wrapper>
      <Row
        gutter={[16, 16]}
        style={{
          display: 'flex',
          'justify-content': 'flex-start',
          'align-items': 'baseline',
          'font-size': 'small',
        }}
      >
        <Col xs={{span:3}}sm={{ span: 3 }} md={{ span: 3 }} xl={{ span: 1 }} span={2}>
          <img className="cart-product-image" src={props.image} alt="" />
        </Col>
        <Col xs={{span:9, offset:2}}sm={{ span: 4, offset: 1 }} xl={{ span: 6 }}>
          <div className="cart-product-name ">
            <div className="cart-bold-font product-name">{props.name}</div>
            <div className="cart-grey-font product-id">{props.id}</div>
          </div>
        </Col>
        <Col xs={{span:4, offset:1 }} md={{ span: 2 }} span={3}>
          <div>{props.color}</div>
        </Col>
        <Col md={{ span: 1, offset: 1 }} span={2}>
          <div></div>
          {props.size}
        </Col>
        <Col xs={{span:7, offset:4}} sm={{ span: 6 }} md={{ span: 5, offset: 1 }} span={5}>
          <div className="cart-product-amount">
            <ButtonGroup>
              <a className="cart-btn-left" onClick={decline}>
                <MinusOutlined />
              </a>
              <input
                className="cart-qty"
                type="text"
                value={count}
                onChange={onCountChange}
              ></input>
              <a className="cart-btn-right" onClick={increase}>
                <PlusOutlined />
              </a>
            </ButtonGroup>
          </div>
        </Col>
        <Col xs={{span:2, offset:4}} sm={{ span: 3, offset: 1 }} md={{ span: 2 }} span={4}>
          <div className="cart-bold-font cart-product-price ">
            {props.price}
          </div>
        </Col>
        <Col xs={{span:2, offset:2}}  md={{ span: 1, offset: 1 }} span={1} offset={1}>
          <CloseOutlined style={{ color: '#000', cursor: 'pointer' }} 
            onClick={()=> handleClose(props.product)}
          />
        </Col>
      </Row>
    </Wrapper>
  )
}

export default CartListCard
