import React from 'react'
import ColorBox from '../../components/ProductsPage/ColorBox'
import { MinusOutlined, PlusOutlined,  } from '@ant-design/icons'
import { Button, Divider, Switch } from 'antd'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { Select } from 'antd';

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import { Container, Row, Col } from 'react-bootstrap'
import { addCart } from "../../redux/constants/action-types";
import { useDispatch, useSelector } from 'react-redux';
const { Option } = Select;
const children = [];


const ButtonGroup = Button.Group

function getItem(label, key, children, type) {
  return {
    key,

    children,
    label,
    type,
  }
}

const items = [
  getItem('CHOSE SIZE', 'sub1', [
    getItem('XS', '1'),
    getItem('S', '2'),
    getItem('M', '3'),
    getItem('L', '4'),
    getItem('XL', '5'),
    getItem('XXL', '6'),
  ]),
]

const ProductInfo = (props) => {
  const [count, setCount] = React.useState(5)
  const dispatch = useDispatch();
  const [color, setColor] = React.useState('black')

  const addProduct = (product) =>{
    dispatch(addCart(product));
  }

 
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    props.setSize(value)
    console.log('size', value);
  };

  React.useEffect(() => {
    console.log('in product info') 

    console.log('props', props)
   
  }, []);

  const increase = () => {
    setCount(count + 1)
  }
  const onCountChange =(event) =>{
    setCount(event.target.value);
    console.log(event.target.value)
  }

  const decline = () => {
    let newCount = count - 1

    if (newCount < 0) {
      newCount = 0
    }

    setCount(newCount)
  }

  return (
    <div className="productInfo">
      <div className="productInfoTitle">{props.name}</div>
      <div className="productPrice">{props.price}</div>
      <div className="productInfoItem">
        color:
        <ColorBox setColor={setColor}></ColorBox>
      </div>
      <div className="productInfoItem">
        <div className="sizeBox">
          size:
          <div className="button-length">
            <Select
              placeholder="size"
              style={{'border-radius': '100px', 'font-weight':'400', 'font-size':'0.7rem', 'text-transform': 'uppercase'}}
              onChange={handleChange}
            >
              <Option value="none" Selected disabled hidden>
                CHOSE SIZE
              </Option>
              <Option value="XS">XS</Option>
              <Option value="S">S</Option>
              <Option value="M">M</Option>
              <Option value="L">L</Option>
              <Option value="XL">XL</Option>
              <Option value="XXL">XXL</Option>
            </Select>
          </div>
        </div>
      </div>
      <div className="productInfoItem">
        <div className="sizeBox">
          Quantity:
          <div>
            
            <div class="group">
              <div className="quantity-group">
                <ButtonGroup>
                  <a className="cartBtn carBtnLeft" onClick={decline}>
                    <MinusOutlined />
                  </a>
                  <input className="qty" type="text" value={count} onChange={onCountChange}></input>
                  <a className="cartBtn carBtnRight" onClick={increase}>
                    <PlusOutlined />
                  </a>
                </ButtonGroup>
              </div>
              <div styles={{ width: '35px' }}>
                <button href="#" class="collectionCardBtn yellow"
                  onClick={()=>addProduct(props)}
                >
                  ADD TO CART
                </button>
              </div>
              <div className='productInfoCardHeart' styles={{padding:'0em 1.2em'}}>
                <FavoriteBorderRoundedIcon/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo
