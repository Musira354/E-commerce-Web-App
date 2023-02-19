import React from "react";
import { Modal } from "react-bootstrap";
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify";
import {connect, useDispatch} from "react-redux"
import { reduxForgotpassword } from "../../redux/actions/authActions";

import * as Yup from 'yup';
import {useFormik} from "formik"

function PasswordModal(props) {

  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: ""
  });

  const validatePassword = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
 
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    validationSchema: validatePassword,
    initialValues: {
      email: "",

    },
    validateOnChange: true,
    onSubmit: (values) => {
      console.log("values", values);
      onSubmitt(values);
    }
  });

  const onChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  }

  const onSubmitt = (values) => { 
    const userData = {
      email: values.email
    }

    axios
      .post("https://unfaded.herokuapp.com/api/forget-password", userData)
      .then((response) => {
        console.log(response)
        if (response?.data?.status == 1) {
          dispatch({
            type: "FORGOTPASSWORD",
            payload: {
              username: "otp sent",
            },
          });
          toast.success("otp sent in Successfully");
          props.onHide();
        } else {
          console.log(userData)
          toast.error("Email is incorrect");
        }

    });
  }

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
            <h5 className="loginHeader">Forgot your password?</h5>
            <div className="loginText">
              Enter your email or phone number To recover your account
            </div>
            <div className="modalInputs">
              <div>
                <input className="modalInput"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  value={values.email}
                  onChange={handleChange}
                  
                />
              </div>
              <button
                href="#"
                class="collectionCardBtn yellow"
                type="submit"
              >
                Reset password
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

const mapDispatchToProps = {
  reduxForgotpassword: reduxForgotpassword,
};

export default connect(null, mapDispatchToProps)(PasswordModal);