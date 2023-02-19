import React, { useEffect } from 'react'
import FooterSection from '../../components/footer/FooterSection'
import CopyRightText from '../../components/others/CopyRightText'
import LoginNavbar from '../../components/login/LoginNavbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import { Col, Row } from 'antd'

import PageHeading from '../PageHeading'

import { useParams } from 'react-router-dom'
import { useDispatch, useSelector, connect } from 'react-redux'
import ProfileDashboard from './ProfileDashboard'
import { Container } from 'react-bootstrap'

const ProfilePage = () => {
  const navigate = useNavigate()

  return (
    <div className="ProfilePage">
      <div className="LoginPage">
        <div className="LoginPage justify-content-space-between">
          <div className="text-center">
            <Row gutter={[16, 24]}>
              <Col span={24} className="cart-bold">
                <div className="cart-goback-btn cart-bold">
                  <ArrowBackIcon
                    style={{
                      color: 'rgb(255, 255, 255)',
                      height: '1.42rem',

                      'margin-left': '1.3em',
                      cursor: 'pointer',
                    }}
                    onClick={() => navigate(-1)}
                  />
                </div>
              </Col>
              <Col span={24} className="cart-bold">
                <Col span={6}>
                  <div className="heading">Mike Johnson</div>
                  <div >New York, USA</div>
                </Col>
              </Col>
            </Row>
            
          </div>
        </div>
      </div>
      <Container>
      <ProfileDashboard/>

      </Container>
    </div>
  )
}

export default ProfilePage
