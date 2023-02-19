import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

import ProductImg1 from "../../assets/images/product-img-1.png";
import ProductImg2 from "../../assets/images/product-img-2.png";
import ProductImg3 from "../../assets/images/product-img-3.png";
import ProductImg4 from "../../assets/images/product-img-4.png";
import  {useEffect, useState} from 'react'
import axios from "axios";
import { Result } from "antd";

const CarouselSection = () => {
  const [data, setData]= React.useState([])

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODFkMmY4OWViYWRjMTAzMTcwZmQyYzg5MmUxOWU1YjExYzMyM2E2YTg5NjAzNDU3NjdkZDBmN2Q5ZTEzMTIyNjJhN2Y2YjZkM2FhM2VjNmIiLCJpYXQiOjE2NTcwODkyNTguNDk1ODczLCJuYmYiOjE2NTcwODkyNTguNDk1ODc4LCJleHAiOjE2ODg2MjUyNTguNDYzNTY4LCJzdWIiOiIyMCIsInNjb3BlcyI6W119.S65e-JJ0IZN-6SDWsM3enY6rjDygflH63Q47Bk_8monFrI-FS83Pd5D3M2z472rSK_xooC7F3z_wUt84fCrVUdCCRDV-qvkM8wzeduOxLID_dAA0KSZKGvhg28dRKXKNLNkwzoVvQ_VEgG-ufRO9ugWwUZADHkbEloR_QVu_AWR2dbT5UIHSULLjJcb2oCNSE5cfg2UT9AtudaWIpIbIxijgUrc1345QQHfmx8f5bdssZ7os21Z4_1x8dEwVN5j-m_UI3DjdRPLbj94mFquMZ44_j6pNTQdOIW_GMn21YZZ2Gil7KfeEIzmyd4wch7VTld52vYsDKe7yiQSaYiKuBvWKZvMK2hS91nowz2ZxAWL5SA9NX9I81w6mPE56EAAFKX2xt6ZYShG6ssLS-J1ErkE6ivyE2P31SS32LQyuy5YHF081m2lhzM9eg1QE_3Wc6zcpE3vVd3PtUIEVtnl3vnng8wQgEshbTFY7cwyqaIXNZ0i1eBi0CLYu7-bsAUW5rubYLlDaHyTsGuVO_7S4HLrnLsyHWhKQhFmw4EieLsHszubg220sPvPlixRfi2NQ6bVtvHaOFcT9JxRc2o05VHY3p3Ja-CeuQelSQZqaBMrfZdQNg_mmb2tFivGFptbcm5GYKrmLDQ01I5ht1BQxYFa791Si6VyO4d0QtnKmbIw';
  const url ='http://34.253.31.99/api/recommended-products-list'
  axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;
 

  const tokenPayload=() =>{
    axios.
        post(url, {
            headers: {
            'Authorization': `Bearer ${token}` 
            }
        })
        .then((response)=>{            
            
          setData(response.data.data)
          console.log("arra",data)
          console.log("res", response.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    //this will operate only once
    React.useEffect(()=>{
        tokenPayload();
    }, []);

  const disscountTags = [ {tag: "30 %"},{tag: ""},{tag: ""},{tag: ""},{tag: "20 %"},{tag: ""},{tag: ""},{tag: ""} ]
  const dataItem = [
    {
      img: ProductImg1,
      tag: "30 %",
      tag: "30 %",    //discounts
      title: "T-Shirt Summer Vibes",
      des: "$89.99",
    },
    {
      img: ProductImg2,
      tag: "",
      tag: "",  //discounts
      title: "Loose Knit 3/4 Sleeve",
      des: "$119.99",
    },
    {
      img: ProductImg1,
      tag: "",
      title: "Basic Slim Fit T-Shirt",
      des: "$79.99",
    },
    {
      img: ProductImg4,
      tag: "",
      title: "Loose Textured T-Shirt",
      des: "$119.99",
    },
    {
      img: ProductImg2,
      tag: "",
      title: "Loose Textured T-Shirt",
      des: "$119.99",
    },
    {
      img: ProductImg1,
      tag: "30 %",
      title: "Loose Textured T-Shirt",
      des: "$119.99",
    },
    {
      img: ProductImg3,
      tag: "",
      title: "Loose Textured T-Shirt",
      des: "$119.99",
    },
  ];

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          // prevArrow: false,
          // nextArrow: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="CarouselSection">
      <Container>
        <div className="recommendedDiv">
          <div className="innerRecommended">
            <div className="recommendedHeading">Recommended for you</div>
            <a href="#" className="collectionCardBtn">
              See All
            </a>
          </div>
        </div>
        <Slider {...settings}>
          
          {data.map((product) => {
            return(
              <div className="productCard">
                {product.tag !== "" ? (
                  <span class="collectionCardTag">{product.tag}</span>
                ) : (
                  ""
                )}
                <img className="productCardImg" src={product.image} alt="" />
                <div className="productCardFooter">
                  <h3 className="productCardHeading">{product.name}</h3>
                  <p className="productCardText">{product.price}</p>
                </div>
              </div>
            )
            
          })}
        </Slider>
      </Container>
    </div>
  );
};

export default CarouselSection;
