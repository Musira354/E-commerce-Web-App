import React from 'react'
import { Breadcrumb, Layout, Menu } from 'antd'
import { Container } from 'react-bootstrap'
import ProductInfo from './ProductInfo'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'

const Product = ({ productDetail }) => {
  const navigate = useNavigate()
  const [size, setSize]= React.useState('M');
  const [color, setColor]=React.useState('black') ;

  const dataItem2 = [
    {
      image: 'http://34.253.31.99/site/upload/product_image/1653660135-0.jpg',
      tag: '',
      name: 'Adidas Men essential gradient logo Short',
      price: '$29.99',
    },
    ,
    {
      image: 'http://34.253.31.99/site/upload/product_image/1653662471-0.jpg',
      tag: '',
      name: 'Giordano Trouser',
      price: '$16.99',
    },
  ]



  return (
    <div className="productSection">
      <Container>
        <div className="section">
          <Breadcrumb
            style={{
              margin: '9% 0px 5% 0px',
              color: '#B2B2B2',
              'font-size': '13px',
            }}
          >
            <Breadcrumb.Item>
              <i class="fa fa-home" aria-hidden="true"></i>{' '}
            </Breadcrumb.Item>
            <Breadcrumb.Item>View All</Breadcrumb.Item>
            <Breadcrumb.Item>Product</Breadcrumb.Item>
          </Breadcrumb>

          <div class="productWrap">
            <div className="productImages">
              <div className="productImagesList">
                <div className="productImagesListItem">
                  <img src={productDetail.image} alt=""></img>
                </div>
              </div>
              <div className="productImagesMain">
                <img
                  src={productDetail.image}
                  alt=""
                  onClick={() =>
                    navigate(`/${productDetail.id}/product-detail`)
                  }
                ></img>
              </div>
            </div>

            <ProductInfo
              id={productDetail.id}
              name={productDetail.name}
              price={productDetail.price}
              image={productDetail.image}
              size={size}
              setSize={setSize}
              color={color}
              setColor={setColor}
              count={0}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Product
