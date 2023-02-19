import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { connect, useDispatch } from 'react-redux'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'

import '../../App.css'
import '../LoginPage.css'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import PageHeading from '../PageHeading'
import ContainerCard from '../ContainerCard'

const validateAddress = Yup.object().shape({
  address: Yup.string().required('address is required'),

  postal_code: Yup.string().required('Postal Code is required'),

  country: Yup.number().required('Country is required'),

  city: Yup.string().required('city is required'),
})

function AddNewAddressPage(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { handleSubmit, handleChange, values, errors } = useFormik({
    validationSchema: validateAddress,
    initialValues: {
      address: '',
      postal_code: '',
      country: '',
      city: '',
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
      address: values.address,
      city: values.city,
      full_name: values.address,
      phone_number: values.country,
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
              address: 'Signed in User',
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
      <PageHeading heading="Add New Address" text="" />
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
              <div className="cart-bold-font address-font">Address</div>
              <input
                className="modalInput"
                name="Address"
                type="text"
                placeholder="Address"
                value={values.address}
                onChange={handleChange}
              />
              <div className="loginText">{errors.address}</div>
            </div>
            <div>
              <div className="cart-bold-font address-font">Postal Code/ ZIP</div>

              <input
                className="modalInput"
                type="postal-code"
                name="postal-code"
                placeholder="Postal Code/ Zip"
                value={values.postal_code}
                onChange={handleChange}
              />
              <div className="loginText">{errors.postal_code}</div>
            </div>
            <div>
              <div className="cart-bold-font address-font">Country</div>

              <input
                className="modalInput"
                type="number"
                name="Country"
                placeholder="Country"
                value={values.country}
                onChange={handleChange}
              />
              <div className="loginText">{errors.country}</div>
            </div>
            <div>
              <div className="cart-bold-font address-font">City</div>

              <input
                className="modalInput"
                type="city"
                name="city"
                placeholder="City"
                value={values.city}
                onChange={handleChange}
              />
              <div className="loginText">{errors.city}</div>
            </div>

            <button
              class="collectionCardBtn black"
              onClick={() => navigate(-1)}
            >
              ADD ADDRESS
            </button>
          </div>
        </form>
      </ContainerCard>
    </div>
  )
}

/*
const mapDispatchToProps = {
  reduxSignup: reduxSignup,
}

export default connect(null, mapDispatchToProps)(AddNewAddressPage)
*/

export default AddNewAddressPage
