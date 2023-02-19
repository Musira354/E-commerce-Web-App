import React from 'react'
import FilterCard2 from './FilterCard2'
import TypeCheckBox from './TypeCheckBox'
import PriceSlider from './PriceSlider'
import { Row, Col } from 'react-bootstrap'
import { Radio } from 'antd'
import { Segmented } from 'antd'
import 'antd/dist/antd.css'
import ColorBox from './ColorBox'

function Filters() {
  const onSizeChange = (e) => {
    //For color selection
    console.log(`radio checked:${e.target.value}`)
  }
  const onColorChange = (e) => {
    //For color selection
    console.log(`radio checked:${e.target.value}`)
  }

  return (
   
      <div className='row'>
        <div className='col-sm-6 col-md-6 col-lg-12'>
          <FilterCard2 title={'PRODUCT' + '  ' + 'TYPE'}>
            <TypeCheckBox type="T-Shirts" typeNumber="411" />
            <TypeCheckBox type="Sweatshirts" typeNumber="131" />
            <TypeCheckBox type="Tank Tops" typeNumber="56" />
            <TypeCheckBox type="Dress shirts" typeNumber="8" />
          </FilterCard2>
        </div>
        <div className='col-sm-6 col-md-6 col-lg-12'>
          <FilterCard2 title={'PRICE'}>
            <Row
              class="priceBox"
              style={{ display: 'flex', 'justify-content': 'space-between' }}
            >
              <div class="priceBox">
                <div class="rangeStart">0 USD</div>
                <div class="rangeEnd">500 USD</div>
              </div>
            </Row>
            <Row>
              <PriceSlider style={{ width: '100%' }} />{' '}
            </Row>
          </FilterCard2>
        </div>
        <div className='col-sm-6 col-md-6 col-lg-12'>
          <FilterCard2 title="SIZE">
            <Radio.Group onChange={onSizeChange} defaultValue="a">
              <Radio.Button style={{'font-size': '0.7rem', 'font-weight':'400'}} value="xs">XS</Radio.Button>
              <Radio.Button style={{'font-size': '0.7rem', 'font-weight':'400'}} value="s">S</Radio.Button>
              <Radio.Button style={{'font-size': '0.7rem', 'font-weight':'400'}} value="m">M</Radio.Button>
              <Radio.Button style={{'font-size': '0.7rem', 'font-weight':'400'}} value="l">L</Radio.Button>
              <Radio.Button style={{'font-size': '0.7rem', 'font-weight':'400'}} value="xl">XL</Radio.Button>
              <Radio.Button style={{'font-size': '0.7rem', 'font-weight':'400'}} value="xxl">XXL</Radio.Button>
            </Radio.Group>
          </FilterCard2>
        </div>
        <div className='col-sm-6 col-md-6 col-lg-12'>
          <FilterCard2 title="COLOR">
            <ColorBox></ColorBox>
          </FilterCard2>
        </div>
      </div>
    
  )
}

export default Filters
