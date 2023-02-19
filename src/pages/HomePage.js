import React from "react";
import LoginNavbar from "../components/login/LoginNavbar";
import HeroSection from "../components/others/HeroSection";
import CollectionSection from "../components/others/CollectionSection";
import CarouselSection from "../components/carousel/CarouselSection";
import ChooseUsSection from "../components/others/ChooseUsSection";
import ProductSection from "../components/others/ProductSection";
import SubscribeSection from "../components/others/SubscribeSection";
import FooterSection from "../components/footer/FooterSection";
import CopyRightText from "../components/others/CopyRightText";
import HeroSection2 from "../components/others/HeroSection2";

const HomePage = (props) => {
  return (
    <div>
      <LoginNavbar isLoggedin={props.isLoggedin} />
      <HeroSection2 />
      <CollectionSection />
      <CarouselSection />
      <ProductSection />
      <ChooseUsSection />
      <SubscribeSection/>
      <FooterSection />
      <CopyRightText />
    </div>
  );
};

export default HomePage;
