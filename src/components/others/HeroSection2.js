import React from "react";
import { Carousel } from "react-bootstrap";
import CarouselNumbers from "../carousel/CarouselNumbers";
import Services from "./Services";
import Img1 from '../../assets/images/carouselImg1.jpg'
import Img2 from "../../assets/images/carouselImg2.jpg"
import Img3 from "../../assets/images/carouselImg3.jpg"
import Img4 from "../../assets/images/carouselImg4.jpg"

import axios from "axios";





function HeroSection2() {
  const [current, setCurrent] = React.useState(1);
  const [data, setData]= React.useState([])

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiODFkMmY4OWViYWRjMTAzMTcwZmQyYzg5MmUxOWU1YjExYzMyM2E2YTg5NjAzNDU3NjdkZDBmN2Q5ZTEzMTIyNjJhN2Y2YjZkM2FhM2VjNmIiLCJpYXQiOjE2NTcwODkyNTguNDk1ODczLCJuYmYiOjE2NTcwODkyNTguNDk1ODc4LCJleHAiOjE2ODg2MjUyNTguNDYzNTY4LCJzdWIiOiIyMCIsInNjb3BlcyI6W119.S65e-JJ0IZN-6SDWsM3enY6rjDygflH63Q47Bk_8monFrI-FS83Pd5D3M2z472rSK_xooC7F3z_wUt84fCrVUdCCRDV-qvkM8wzeduOxLID_dAA0KSZKGvhg28dRKXKNLNkwzoVvQ_VEgG-ufRO9ugWwUZADHkbEloR_QVu_AWR2dbT5UIHSULLjJcb2oCNSE5cfg2UT9AtudaWIpIbIxijgUrc1345QQHfmx8f5bdssZ7os21Z4_1x8dEwVN5j-m_UI3DjdRPLbj94mFquMZ44_j6pNTQdOIW_GMn21YZZ2Gil7KfeEIzmyd4wch7VTld52vYsDKe7yiQSaYiKuBvWKZvMK2hS91nowz2ZxAWL5SA9NX9I81w6mPE56EAAFKX2xt6ZYShG6ssLS-J1ErkE6ivyE2P31SS32LQyuy5YHF081m2lhzM9eg1QE_3Wc6zcpE3vVd3PtUIEVtnl3vnng8wQgEshbTFY7cwyqaIXNZ0i1eBi0CLYu7-bsAUW5rubYLlDaHyTsGuVO_7S4HLrnLsyHWhKQhFmw4EieLsHszubg220sPvPlixRfi2NQ6bVtvHaOFcT9JxRc2o05VHY3p3Ja-CeuQelSQZqaBMrfZdQNg_mmb2tFivGFptbcm5GYKrmLDQ01I5ht1BQxYFa791Si6VyO4d0QtnKmbIw';
  const url ='http://34.253.31.99/api/banners'
  axios.defaults.headers.post['Authorization'] = `Bearer ${token}`;
 

  const tokenPayload=() =>{
    axios.
        post(url, {
            headers: {
            'Authorization': `Bearer ${token}` 
            }
        })
        .then((response)=>{            
            setData(response.data.data.banners)
            
        })
        .catch((error) => {
            console.log(error)
        })
    }


    //this will operate only once
    React.useEffect(()=>{
        tokenPayload();
    }, []);

  const handleCarousel = (e) => {
    setCurrent(e + 1);
  };

 
  return (
    <section className="HeroSection">
      <Carousel interval={1000} onSlide={handleCarousel}>
        {data.map((imgObj)=>{
            return(
                <Carousel.Item>
                    <img className='d-block w-100' src={imgObj.image} ></img>            
                    <div className="carouselNumbersSub">
                        <h1 className="mianHeading">
                        Sale of the sumer <br /> collection
                        </h1>
                        <a className="moreLink" href="/">
                        <i class="fas fa-arrow-right"></i> Check More
                        </a>
                    </div>
                </Carousel.Item>
            )
        })}
        
        
        <Carousel.Item>
            <img className='d-block w-100' src={Img2} ></img>
            <div className="carouselNumbersSub">
                <h1 className="mianHeading">
                Sale of the summer <br /> collection
                </h1>
                <a className="moreLink" href="/">
                <i class="fas fa-arrow-right"></i> Check More
                </a>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Img3}></img>
          <div className="carouselNumbersSub">
            <h1 className="mianHeading">
              Sale of the summer <br /> collection
            </h1>
            <a className="moreLink" href="/">
              <i class="fas fa-arrow-right"></i> Check More
            </a>
          </div>
          
        </Carousel.Item>
        <Carousel.Item>
            <img className='d-block w-100 ' src={Img4} ></img>
                <div className="carouselNumbersSub">
                    <h1 className="mianHeading">
                    Sale of the summer <br /> collection
                    </h1>
                    <a className="moreLink" href="/">
                    <i class="fas fa-arrow-right"></i> Check More
                    </a>
                </div>
        </Carousel.Item>
      </Carousel>
      
      <CarouselNumbers current={("0" + current).slice(-2)} total="04" />
    </section>
  );
}

export default HeroSection2;
