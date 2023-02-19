import React from 'react'
import { Modal, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import { connect, useDispatch } from 'react-redux'
import { reduxSignup } from '../redux/actions/authActions'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

import '../App.css'
import './LoginPage.css'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import PageHeading from './PageHeading'
import ContainerCard from './ContainerCard'

const validateSignup = Yup.object().shape({
  username: Yup.string()
    .min(4, 'username should be atleast 4 characters')
    .required('username is required'),

  email: Yup.string()
    .email('Invalid email address format')
    .required('Email is required'),

  phoneNumber: Yup.number()
    .min(11, 'number should be of 11 digits')
    .required('number is required'),

  password: Yup.string()
    .min(8, 'Password must be 8 atleast characters')
    .required('Password is required'),
})

function SignupPage(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { handleSubmit, handleChange, values, errors } = useFormik({
    validationSchema: validateSignup,
    initialValues: {
      username: '',
      email: '',
      phoneNumber: '',
      password: '',
    },
    validateOnChange: true,
    onSubmit: (values) => {
      console.log('values', values)
      onSubmitt(values)
    },
  })

  const onSubmitt = (values) => {
    console.log('form submitted!')
    const userData = {
      email: values.email,
      password: values.password,
      full_name: values.username,
      phone_number: values.phoneNumber,
      role_id: 1,
    }

    axios.post('http://34.253.31.99/api/register', userData).then(
      (response) => {
        console.log(response)
        console.log({ userData })
        if (response?.data?.status === 1) {
          dispatch({
            type: 'SIGNUP',
            payload: {
              username: 'Signed in User',
            },
          })

          toast.success('Signed up Successfully!')
          props.onHide()
          props.showLogin()
        } else {
          toast.error(response?.data?.message)
        }
      },
      (error) => {
        console.log(error)
      },
    )
  }

  return (
    <div className="LoginPage">
      <PageHeading
        heading="Create an Account"
        text="Let’s join UNFADED ; the online solution for all your fashion
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
          <div className="modalInputs">
            <div>
              <input
                className="modalInput"
                name="username"
                type="text"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
              />
              <div className="loginText">{errors.username}</div>
            </div>
            <div>
              <input
                className="modalInput"
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
              <div className="loginText">{errors.email}</div>
            </div>
            <div>
              <input
                className="modalInput"
                type="number"
                name="phoneNumber"
                placeholder="Phone Number"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              <div className="loginText">{errors.phoneNumber}</div>
            </div>
            <div>
              <input
                className="modalInput"
                type="password"
                name="password"
                placeholder="Password (More than 7 characters)"
                value={values.password}
                onChange={handleChange}
              />
              <div className="loginText">{errors.password}</div>
            </div>
            <div className="md-flex ">
              <Col className="text-start" lg>
                <input className="signedCheckbox" id="signed" type="checkbox" />
                <label htmlFor="signed" className="signedText d-inline">
                  I agree to UNFADED terms of Service and Privacy Policy
                </label>
              </Col>
            </div>
            <button class="collectionCardBtn black" type="submit">
              REGISTER
            </button>

            <div className="md-flex ">
              <nav>
                <Link to="/login">Are you already a member? Login</Link>
              </nav>
            </div>
          </div>
        </form>
      </ContainerCard>
    </div>
  )
}

const mapDispatchToProps = {
  reduxSignup: reduxSignup,
}

export default connect(null, mapDispatchToProps)(SignupPage)
