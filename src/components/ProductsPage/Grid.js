import React, { Children } from 'react'
import "../../pages/ProductsPage.css"
import {  Row, Col } from "react-bootstrap";

const Grid = props => {


    return (
        
        <div class="gridwrap">
           
            {props.children}
           
            
        </div>
        
        
    )
}



export default Grid
