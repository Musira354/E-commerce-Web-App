import React from "react";
import { useState, useEffect } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { connect, useDispatch } from "react-redux";
import { reduxSignup } from "../../redux/actions/authActions";

import * as Yup from 'yup';
import {useFormik} from "formik"


const validateSignup = Yup.object().shape({
  username: Yup.string()
    .min(4, "username should be atleast 4 characters")
    .required("username is required"),
  
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  
  phoneNumber: Yup.number()
    .min(11, 'number should be of 11 digits')
    .required('number is required'),
  
  password: Yup.string()
    .min(8, "Password must be 8 atleast characters")
    .required("Password is required"),
});


function SignUpModal(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    validationSchema: validateSignup                      ,
    initialValues: {
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    validateOnChange: true,
    onSubmit: (values) => { 
      console.log("values", values);
      onSubmitt(values);
    }
  })

  const onChange = (e) => {
    const value = e.target.value;

    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const onSubmitt = (values) => {
    
    const userData = {
      email: values.email,
      password: values.password,
      full_name: values.username,
      phone_number: values.phoneNumber,
      role_id: 1,
    };

    axios
      .post("https://unfaded.herokuapp.com/api/register ", userData)
      .then((response) => {
        console.log(response);
        console.log({ userData });
        if (response?.data?.status === 1) {
          dispatch({
            type: "SIGNUP",
            payload: {
              username: "Signed in User",
            },
          });

          toast.success("Signed up Successfully!");
          props.onHide();
          props.showLogin();
        } else {
          toast.error(response?.data?.message);
        }
      });
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="text-center">
            <h5 className="loginHeader">
              Create an account and <br />
              discover the benefits
            </h5>
            <div className="loginText">
              Let’s join UNFADED ; the online solution for all your fashion
              needs.
            </div>
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
                <div className="loginText" >{errors.username}</div>
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
              <Row className="mt-4">
                <Col className="text-start" lg>
                  <input
                    className="signedCheckbox"
                    id="signed"
                    type="checkbox"
                  />
                  <label htmlFor="signed" className="signedText d-inline">
                    I agree to UNFADED terms of Service and Privacy Policy
                  </label>
                </Col>
              </Row>
              <button href="/" class="collectionCardBtn yellow" type="submit">
                Sign up
              </button>
              <Row>
                <Col>
                  <a
                    className="memberLink"
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      props.showLogin();
                    }}
                  >
                    Are you already a member? Login
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}


const mapDispatchToProps = {
  reduxSignup: reduxSignup,
};

export default connect(null, mapDispatchToProps)(SignUpModal);
