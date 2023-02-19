import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import LoginModal from "../login/LoginModal";
import SignupModal from "../signup/SignUpModal";
import PasswordModal from "../forgotPassword/PasswordModal";
import { useSelector } from "react-redux";

const ProductNavbar = (props) => {
  const [loginModalShow, setLoginModalShow] = React.useState(false);
  const [signupModalShow, setSignupModalShow] = React.useState(false);
  const [passwordModalShow, setPasswordModalShow] = React.useState(false);
  const { isAuthenticated, username } = useSelector(
    (state) => state.authenticationData
  );

  return (
    <Navbar className="LoginNavbar" expand="lg">
      <Container>

        <Navbar.Brand href="#home">
          <img src={Logo} alt="" />
        </Navbar.Brand>
        <Nav>
          
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="ms-auto bottom ml-2">
          
          <input class="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"></input>
            <Nav.Link href="#home" className="bottom">
              <i class="fas fa-search"></i>
              
            </Nav.Link>
            <Nav.Link href="#link" className="mx-0 mx-lg-2 bottom">
                <i class="bi bi-cart3"></i>

            </Nav.Link>
            
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
              
            <NavLink to='/login'  style={{ fontWeight: "bold", color: "black" }}>
                <i class="far fa-user mt-3" 
                  onClick={ ()=>Navigate('login')}
                ></i>
            </NavLink>
            
              
            )}

            {isAuthenticated && (
              <Nav.Link style={{ fontWeight: "bold", fontColor: "black" }}>
                {username}
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <LoginModal
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}
        showSignup={() => {
          setLoginModalShow(false);
          setSignupModalShow(true);
        }}
        showPassword={() => {
          setLoginModalShow(false);
          setPasswordModalShow(true);
        }}
      />
      <SignupModal
        show={signupModalShow}
        onHide={() => setSignupModalShow(false)}
        showLogin={() => {
          setSignupModalShow(false);
          setLoginModalShow(true);
        }}
      />
      <PasswordModal
        show={passwordModalShow}
        onHide={() => setPasswordModalShow(false)}
      />
    </Navbar>
  );
};

export default ProductNavbar;
