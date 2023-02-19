import React from 'react'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Logo from '../../assets/images/FinalLogoPng.png'
import { Route, Link, NavLink, Navigate } from 'react-router-dom'
import TypesModal from './TypesModal'
import LoginModal from '../login/LoginModal'
import SignupModal from '../signup/SignUpModal'
import PasswordModal from '../forgotPassword/PasswordModal'
import { useSelector } from 'react-redux'
import CategorySection from '../others/CategorySection'
import logo from '../../assets/images/logo3-1.PNG'
import wishBag from '../../assets/images/navbar-wishlist-bag.svg'
import { Badge } from '@mui/material'

const LoginNavbar = (props) => {
  const state = useSelector((state) => state.handleCart)
  const [loginModalShow, setLoginModalShow] = React.useState(false)
  const [signupModalShow, setSignupModalShow] = React.useState(false)
  const [passwordModalShow, setPasswordModalShow] = React.useState(false)
  const { isAuthenticated, username } = useSelector(
    (state) => state.authenticationData,
  )

  return (
    <Container fluid style={{ padding: '0' }}>
      <Navbar className="LoginNavbar" expand={'lg'}>
        <Navbar.Brand href="#home">
          
          <div color="black" onClick={() => Navigate('login')}>{Logo}</div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto bottom ml-2">
            <input
              class="modalInput "
              type="search"
              placeholder="Search"
            ></input>
            <NavLink to="/cart">
              <i class="far fa-search"></i>
            </NavLink>
            <NavLink to="/cart">
              <Badge badgeContent={state.length} overlap="circular" color="success" sx={{
                '& .MuiBadge-badge':{
                  'background-color': '#000'
                }
              }} >
                <i
                  class="far fa-shopping-cart"
                  onClick={() => Navigate('cart')}
                ></i>
                {console.log('l ', state.length)}
              </Badge>
            </NavLink>

            {!isAuthenticated && (
              /*
              <Nav.Link
                href="#login"
                onClick={() => setLoginModalShow(true)
                }
                className="bottom"
              >
                <i class="far fa-user"></i>
              </Nav.Link>
              */

              /*
              <a
                
                
                className="bottom"
              >
                <i class="far fa-user" onClick={() => Navigate('login')}
              ></i>
              </a>
              */

              <NavLink to="/login">
                <a
                  class="far fa-user mx-0  bottom "
                  onClick={() => Navigate('login')}
                ></a>
              </NavLink>
            )}

            {isAuthenticated && (
              <NavLink style={{ fontWeight: 'bold', fontColor: 'black' }}>
                {username}
              </NavLink>
            )}
            <NavLink to="/wishlist" className="">
              <img
                class="far"
                src={wishBag}
                style={{
                  height: '18px',
                  'padding-bottom': '2px',
                  'margin-left': '18px',
                }}
                onClick={() => Navigate('wishlist')}
              ></img>
            </NavLink>
          </Nav>
        </Navbar.Collapse>

        <LoginModal
          show={loginModalShow}
          onHide={() => setLoginModalShow(false)}
          showSignup={() => {
            setLoginModalShow(false)
            setSignupModalShow(true)
          }}
          showPassword={() => {
            setLoginModalShow(false)
            setPasswordModalShow(true)
          }}
        />
        <SignupModal
          show={signupModalShow}
          onHide={() => setSignupModalShow(false)}
          showLogin={() => {
            setSignupModalShow(false)
            setLoginModalShow(true)
          }}
        />
        <PasswordModal
          show={passwordModalShow}
          onHide={() => setPasswordModalShow(false)}
        />
      </Navbar>
    </Container>
  )
}

export default LoginNavbar
