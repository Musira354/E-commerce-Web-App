import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPassword from "./pages/ForgotPassword";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import CartPage from "./pages/CartPage/CartPage";
import SelectAddressPage from "./pages/AddAddress Page/SelectAddressPage";
import AddNewAddressPage from "./pages/AddAddress Page/AddNewAddressPage";
import { WishlistPage } from "./pages/WishlistPage.jsx/WishlistPage";
import SummaryPage from "./pages/SummaryPage/SummaryPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ChoosePronounScreen3 from "./pages/ChoosePronoun/ChoosePronounScreen3";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
          }
        />
        <Route path="home" element={<HomePage/>}/>
        <Route path="login" element={<LoginPage />} />
        <Route path="view-all" element={<ProductsPage />} />
        <Route path=":id/product-detail" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path='wishlist' element={<WishlistPage />}></Route>
        <Route path="cart/select-address" element={<SelectAddressPage/>}></Route>
        <Route path="cart/select-address/add-new-address" element={<AddNewAddressPage/>}></Route>
        <Route path="cart/select-address/summary" element={<SummaryPage/>}></Route>
        <Route path="login/signup" element={<SignupPage />} />
        <Route path="login/forget" element={<ForgotPassword />} />
        <Route path="profile" element={<ProfilePage/>} />
        <Route path="choose-screen-1" element={<ChoosePronounScreen3/>} />


      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
