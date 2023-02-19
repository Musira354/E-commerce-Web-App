import React from 'react'
import FooterSection from "../../components/footer/FooterSection";
import LoginNavbar from "../../components/login/LoginNavbar";
import Cart from "../CartPage/Cart";
import Summary from './Summary';

const SummaryPage = () => {
  return (
    <div className='SummaryPage'>
    <LoginNavbar>
    </LoginNavbar>
    <Summary/>
    <FooterSection></FooterSection>
  </div>
  )
}

export default SummaryPage