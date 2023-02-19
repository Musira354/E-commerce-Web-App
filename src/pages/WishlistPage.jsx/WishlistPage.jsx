import React, { useEffect } from "react";
import FooterSection from "../../components/footer/FooterSection";
import LoginNavbar from "../../components/login/LoginNavbar";

import Wishlist from "./Wishlist";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";

export const WishlistPage = () => {
  return (
    <div className='WishlistPage'>
      <LoginNavbar />
      <Wishlist />
      <FooterSection />
    </div>
    
  )
}
