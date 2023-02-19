import  Grid  from '../components/ProductsPage/Grid'
import React from 'react'
import { Container } from "react-bootstrap";
import ProductNavbar from '../components/others/ProductNavbar'
import axios from 'axios'
import "../App.css"
import ProducstCard from '../components/others/ProductsCard';
import {Row, Col} from 'react-bootstrap'
import ChooseUsSection from "../components/others/ChooseUsSection";
import ProductSection from "../components/others/ProductSection";
import FooterSection from "../components/footer/FooterSection";
import CopyRightText from "../components/others/CopyRightText";
import LoginNavbar from '../components/login/LoginNavbar';
import SubscribeSection from '../components/others/SubscribeSection';

const ProductsPage = (props) => {

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


    React.useEffect(()=>{
        tokenPayload();
    },[])

/*<ProducstCard tag={product.tag} title={product.name} image={product.image[0]} des={product.price} />*/

  return (
    <div class='ProductsPage'>
        <div class='header'><LoginNavbar></LoginNavbar></div>
        <div class='path'>home / All products</div>
        
        <div class='filters'>
            <h2>filters</h2>
            <div class='typeBox'><h3>PRODUCT TYPE</h3></div>
            <div class='priceBox'><h3>PRICE BOX</h3></div>
            <div class='sizeBox'><h3>SIZE</h3></div>
            <div class='colorBox'><h3>COLOR</h3></div>

        </div>
        <div class='productsSection'>
            <h2>productsSection</h2>
            <div class='productSectionHeader'>
                <h3>Men's Tops</h3>
                <div class='pagefilter'>
                    <div class='showProducts'>Show Products: 30</div>
                    <div class='popular'>Popular</div>
                </div>
            </div>
            <div class='productsGrid'>

                <Grid>
                    
                    {data.map((product) => (
                    
                        <div className="productCard">
                            
                            <img className="productCardImg" src={product.image[0]} alt="" />
                            <div className="productCardFooter">
                            <h3 className="productCardHeading">{product.name}</h3>
                            <p className="productCardText">{'$'+product.price}</p>
                            </div>
                        </div>
                        
                        
                        
                    ))}
                    
                    
                </Grid>
                    
                
            </div>
        </div>
       
        <div class='footer'>
            <SubscribeSection/>
            <FooterSection />
            <CopyRightText />
      </div>
    
    </div>

    
  )
}

export default ProductsPage