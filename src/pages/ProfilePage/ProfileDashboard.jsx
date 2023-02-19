import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AddressCard from '../AddAddress Page/AddressCard'
import { Col, Row } from 'antd'
import WishListCard from '../WishlistPage.jsx/WishlistProductCard'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import OrderCard from './OrderCard'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function ProfileDashboard() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const data = [
    {
      id: 1,
      image: 'http://34.253.31.99/site/upload/product_image/1653660135-0.jpg',
      tag: '',
      name: 'Adidas Men essential gradient logo Short',
      price: '$29.99',
      color: 'Black',
      size: 'M',
    },
    ,
    {
      id: 2,
      image: 'http://34.253.31.99/site/upload/product_image/1653662471-0.jpg',
      tag: '',
      name: 'Giordano Trouser',
      price: '$16.99',
      color: 'Grey',
      size: 'M',
    },
  ]

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          background: ' #fff',
          'border-radius': '35px',
          overflow: 'hidden',
          'box-shadow': '5px 5px 20px rgb(185, 185, 185)',
          height: '28em',
          width: '20em',
          'margin-top': '-1.2em',
          '& .MuiTabs-indicator': {
            color: '#000',
            'background-color': 'black',
          },
          '&  .MuiTab-root': {
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'flex-start',
          },
          '&  .MuiButtonBase-root-MuiTab-root': {
            color: 'red',
          },
        }}
      >
        <Tab label="Profile " {...a11yProps(0)} />
        <Tab label="Orders" {...a11yProps(1)} />
        <Tab label="Subscribed Brands" {...a11yProps(2)} />
        <Tab label="Addresses" {...a11yProps(3)} />
        <LinkTab label="Wishlist" href="/wishlist" />

        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OrderCard />
      </TabPanel>
      <TabPanel
        sx={{
          '& .MuiTabPanel-root': {
            width: '80%',
            'padding-left': '2em',
          },
        }}
        value={value}
        index={2}
      ></TabPanel>
      <TabPanel value={value} index={3}>
        <Row gutter={[16, 16]}>
          <Col span={24} className=" dashboard-font-size">
            Your Addresses
          </Col>
          <Col span={24} className="select-address-section">
            <AddressCard />
          </Col>
        </Row>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Col span={24} className=" dashboard-font-size">
          Your Wishlist{' '}
          <FavoriteBorderIcon
            style={{ 'margin-left': '.2em', 'font-size': '1em' }}
          />
        </Col>
        <Col span={24} className="select-address-section">
          {data.map((product) => (
            <WishListCard
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </Col>
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  )
}
