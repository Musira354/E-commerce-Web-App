import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import '../../App.css'
import '../LoginPage.css'
import PageHeading from '../PageHeading'
import ContainerCard from '../ContainerCard'
import { Select, Row, Col } from 'antd'
import ChoosePronounCard from './ChoosePronounCard'
import royaltag from '../../assets/images/brand-royaltag.svg'
import charcol from '../../assets/images/brand-charcol.svg'
import giordano from '../../assets/images/brand-giordano.svg'
import adidas from '../../assets/images/brand-adidas.svg'
import { Paper, Button } from '@mui/material'
const { Option } = Select
const children = []

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

const handleChange = (value) => {
  console.log(`selected ${value}`)
}

const ChoosePronounScreen3 = () => {
  const navigate = useNavigate()

  const brands_data = [
    {
      id: 1,
      name: 'charcol',
      img:  charcol ,
    },
    {
      id: 2,
      name: 'giordano',
      img:  giordano ,
    },
    {
      id: 3,
      name: 'royal tag',
      img: royaltag ,
    },
    {
      id: 4,
      name: 'adidas',
      img: adidas ,
    },
  ]

  return (
    <div className="choose-screen-1">
      <div className="LoginPage">
        <PageHeading heading="What brands do you like the most?" text="" />
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
        <ContainerCard>
          Heloo this is the choose screen 3
          <Select
            mode="multiple"
            allowClear
            style={{
              width: '100%',
            }}
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
            onChange={handleChange}
          >
            {children}
          </Select>
          <br />
          <Row gutter={[30, 16]} justify="space-between">
            {brands_data.map((brand)=> (
                <Col span={6} className='flex-col'>
                <ChoosePronounCard name={brand.name} img={brand.img} />
              </Col>
            ))}
            
           
          </Row>
        </ContainerCard>
      </div>
    </div>
  )
}

export default ChoosePronounScreen3
