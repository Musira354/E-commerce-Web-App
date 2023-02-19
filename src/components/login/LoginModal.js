/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { Modal, Row, Col } from "react-bootstrap";
import facebookIcon from "../../assets/images/facebook-icon.png";
import googleIcon from "../../assets/images/google-icon.png";
import axios from "axios";
import { toast } from "react-toastify";
import { connect, useDispatch } from "react-redux";
import { reduxLogin } from "../../redux/actions/authActions";
import { Route, Routes, Link } from "react-router-dom";

import * as Yup from 'yup';
import {useFormik} from "formik"


const validateLogin = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be 8 atleast characters")
    .required("Password is required"),
});



const LoginModal = (props) => {

  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
    validationSchema: validateLogin,
    initialValues: {
      email: "",
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
    };

    axios
      .post("https://unfaded.herokuapp.com/api/login ", userData)
      .then((response) => {
        console.log(response);
        if (response?.data?.token) {
          dispatch({
            type: "LOGIN",
            payload: {
              username: "Logged in User",
            },
          });
          
          toast.success("Logged in Successfully");
          props.onHide();
        } else {
          toast.error("Email or Password is incorrect");
        }
      });
  };

  return (
    <div>
      <main>
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
                <h5 className="loginHeader">Log in</h5>
                <div className="loginText">
                  Welcome back to UNFADED ; the online solution for all your fashion
                  needs.
                </div>
              
                
                <div className="inputArea">
                  <input
                    className="modalInput"
                    id="email" name="email" type="email" placeholder="E-mail"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <div className="loginText">{errors.email}</div>
                </div>
              
                <div className="inputArea mt-4">
                  <input
                    className="modalInput"
                    id="password" name="password" type="password" placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  <div className="loginText md-9">{errors.password}</div>
                </div>
            
                <Row className="mt-4">
                  <Col className="text-start" lg>
                    <input
                      className="signedCheckbox"
                      id="signed"
                      type="checkbox"
                    />
                    <label htmlFor="signed" className="signedText">
                      Keep me signed in
                    </label>
                  </Col>
                  
                  <Col className="text-end" lg>
                    <a
                      className="forgotPass"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        props.showPassword();
                      }}
                    >
                      Forgot password?
                    </a>
                  </Col>
                </Row>

                <Row className="mt-4">
                  
                  <Col className="text-start" lg>
                    <a className="socialBtn facebookBtn mb-2 mb-log-0" href="#">
                      <img src={facebookIcon} alt="" />
                      Facebook
                    </a>
                  </Col>

                  <Col className="text-end" lg>
                    <a className="socialBtn" href="#">
                      <img src={googleIcon} alt="" />
                      Google
                    </a>
                  </Col>

                </Row>

                <button href="#" class="collectionCardBtn yellow" type="submit">
                  Sign in
                </button>

                <Row>
                  
                  <Col lg>
                    <a className="memberLink" href="#">
                      Not a member yet?
                    </a>
                  </Col>
                  
                  <Col lg>
                    <a
                      className="memberLink"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        props.showSignup();
                      }}
                    >
                      <strong>Sign up</strong>
                    </a>
                  </Col>
                </Row>
              
              </div>
            </form>    
          </Modal.Body>
        </Modal>
      </main>
     
    </div>
  );
}

const mapDispatchToProps = {
  reduxLogin: reduxLogin,
};

export default connect(null, mapDispatchToProps)(LoginModal);
