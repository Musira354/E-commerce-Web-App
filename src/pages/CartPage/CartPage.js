import React, { useEffect } from "react";
import FooterSection from "../../components/footer/FooterSection";
import CopyRightText from "../../components/others/CopyRightText";
import LoginNavbar from "../../components/login/LoginNavbar";


import { useParams } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";
import Cart from "./Cart";

const CartPage = () => {
  return (
    <div className='CartPage'>
      <LoginNavbar>

      </LoginNavbar>
      <Cart/>
      <FooterSection></FooterSection>
    </div>
  )
}

export default CartPage