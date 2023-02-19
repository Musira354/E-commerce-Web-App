import React from 'react'
import '../App.css'
import { Col, Row } from 'antd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FooterSection from '../components/footer/FooterSection'
import CopyRightText from '../components/others/CopyRightText'
import LoginNavbar from '../components/login/LoginNavbar'
import SubscribeSection from '../components/others/SubscribeSection'
import Filters from '../components/ProductsPage/Filters'

import ProductsView from './ProductsView'


const ProductsPage = (props) => {
  /*<ProducstCard tag={product.tag} title={product.name} image={product.image[0]} des={product.price} />*/
  return (
    <div class="ProductsPage">
      <LoginNavbar></LoginNavbar>
      <div class="wrap">
        <div class="path">
          <i class="fa fa-home" aria-hidden="true"></i> / All products
        </div>
        <Row gutter={[30, 20]}>
          <Col xxl={{span:6}} sm={{span:24}} xl={{span:6}} lg={{span: 7}} md={{span: 24}}>
              <Filters />
          </Col>
          <Col xxl={{span: 18}} xl={{span: 18}} lg={{span: 17}} md={{ span: 24 }}  sm={{ span: 24 }}>
            <div class="productsWrap">
              <ProductsView />
            </div>
          </Col>
        </Row>
        <div class="main"></div>

        <div class="footer">
          <SubscribeSection />
          <FooterSection />
          <CopyRightText />
        </div>
      </div>
    </div>
  )
}

export default ProductsPage
