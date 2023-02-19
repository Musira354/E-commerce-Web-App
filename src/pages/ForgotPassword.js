import React from "react";
import { Modal } from "react-bootstrap";
import { useState } from "react"
import axios from "axios"
import ContainerCard from "./ContainerCard";
import { toast } from "react-toastify";
import {connect, useDispatch} from "react-redux"
import { reduxForgotpassword } from "../redux/actions/authActions";
import PageHeading from "./PageHeading";
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
      .post("http://34.253.31.99/api/forget-password", userData)
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
    <div>
      <ContainerCard>
              <PageHeading heading="Forgot Password?" 
              text="Enter your email or phone number To recover your account"/>
              <form onSubmit={handleSubmit}>
                <div className=" wrap-login100">  
        
                <div className="input-box">       
                  <div className="inputArea">
                    <div>
                      <input className="Input"
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
                  </div>
                </div>

                </div>
                <button  class="collectionCardBtn black" type="submit">SEND</button>
              </form>
      </ContainerCard>          
    </div>
  );
}

const mapDispatchToProps = {
  reduxForgotpassword: reduxForgotpassword,
};

export default connect(null, mapDispatchToProps)(PasswordModal);