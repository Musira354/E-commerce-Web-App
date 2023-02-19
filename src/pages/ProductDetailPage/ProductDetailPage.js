import React, { useEffect } from "react";
import FooterSection from "../../components/footer/FooterSection";
import CopyRightText from "../../components/others/CopyRightText";
import LoginNavbar from "../../components/login/LoginNavbar";
import SubscribeSection from "../../components/others/SubscribeSection";
import CarouselSection from "../../components/carousel/CarouselSection";

import Product from "./Product";
import { Container } from "react-bootstrap";
import ReviewSection from "./ReviewSection";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch({
      type: "GET_PRODUCT_DETAIL",
      payload: {
        id: Number(id),
      },
    });
  }, []);
  const { productDetail } = useSelector((state) => state.productsData);

  console.log({ productDetail });

  return (
    <div>
      <LoginNavbar></LoginNavbar>

      <Product productDetail={productDetail} />
      <ReviewSection />
      <CarouselSection />

      <Container>
        <SubscribeSection />
      </Container>
      <FooterSection />
      <CopyRightText />
    </div>
  );
};

export default ProductDetailPage;
