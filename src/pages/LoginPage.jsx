/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import facebookIcon from '../assets/images/facebook-icon.png'
import googleIcon from '../assets/images/google-icon.png'
import axios from 'axios'
import { toast } from 'react-toastify'
import { connect, useDispatch } from 'react-redux'
import { reduxLogin } from '../redux/actions/authActions'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import './LoginPage.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

import PageHeading from './PageHeading'
import ContainerCard from './ContainerCard'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const validateLogin = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be 8 atleast characters')
    .required('Password is required'),
})

const LoginPage = (props) => {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    validationSchema: validateLogin,
    initialValues: {
      email: '',
      password: '',
    },
    validateOnChange: true,
    onSubmit: (values) => {
      console.log('values', values)
      onSubmitt(values)
    },
  })

  const onSubmitt = (values) => {
    const userData = {
      email: values.email,
      password: values.password,
    }

    axios.post('http://34.253.31.99/api/login', userData).then((response) => {
      console.log(response)
      if (response?.data?.token) {
        dispatch({
          type: 'LOGIN',
          payload: {
            username: 'Logged in User',
          },
        })

        toast.success('Logged in Successfully')
        props.onHide()
      } else {
        toast.error('Email or Password is incorrect')
      }
    })
  }

  return (
    <div className="LoginPage">
      <PageHeading
        heading="Log in"
        text="Welcome back to UNFADED ; the online solution for all your fashion
        needs."
      />
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
        <form onSubmit={handleSubmit}>
          <div className="wrap-inputbox100">
            <div className="input-box">
              <div className="inputArea">
                <input
                  className="Input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  value={values.email}
                  onChange={handleChange}
                />
                <span class="focus-input100"></span>
                <span class="symbol-input100">
                  <span class="fa fa-envelope" aria-hidden="true"></span>
                </span>
              </div>
              <div className="loginText">{errors.email}</div>
            </div>
            <div className="input-box">
              <div className="inputArea ">
                <input
                  className="Input"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              <div className="loginText">{errors.password}</div>
            </div>
          </div>
          <div className="md-flex ">
            <Col className="text-start" lg>
              <input className="signedCheckbox" id="signed" type="checkbox" />
              <label htmlFor="signed" className="signedText">
                Keep me signed in
              </label>
            </Col>

            <Col className="text-end" lg>
              <a className="forgotPass" onClick={() => navigate('forget')}>
                FORGOT PASSWORD?
              </a>
            </Col>
          </div>

          <button class="collectionCardBtn black" type="submit">
            LOGIN
          </button>
          <a
            className="collectionCardBtn white mt-4 mb-4"
            onClick={() => navigate('signup')}
          >
            REGISTER
          </a>

          <p class="b-100 text-center mt-2  ">__________ OR ___________</p>
        </form>

        <div>
          <Col className="text-start" lg>
            <a
              className="page-content socialBtn facebookBtn mb-2 mb-log-0 "
              href="#"
            >
              <img src={facebookIcon} alt="" />
              LOGIN WITH FACEBOOK
            </a>
          </Col>
        </div>
        <div>
          <Col className="text-end" lg>
            <a className="page-content socialBtn googleBtn " href="#">
              <img src={googleIcon} alt="" />
              LOGIN WITH GOOGLE
            </a>
          </Col>
        </div>
      </ContainerCard>
    </div>
  )
}

const mapDispatchToProps = {
  reduxLogin: reduxLogin,
}

export default connect(null, mapDispatchToProps)(LoginPage)
