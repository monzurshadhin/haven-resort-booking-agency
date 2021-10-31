import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../Hooks/useAuth";
import "./Header.css";

const Header = () => {
  const [isActive,setIsActive] = useState('');
  const { user, logOut } = useAuth();
  
  const handleActive = (data) =>{
    setIsActive(data);
  }
  return (
    <Navbar fixed="top" variant="dark" className="navbar-section" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="logo">
          Haven Resort
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link as={HashLink} to="/home#home" onClick={()=>handleActive('home')} className={isActive==='home'?'active-class':''}>
              Home
            </Nav.Link>

            <Nav.Link as={HashLink} to="/home#offers" onClick={()=>handleActive('resorts')} className={isActive==='resorts'?'active-class':''}>
              Resorts
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#reviews" onClick={()=>handleActive('reviews')} className={isActive==='reviews'?'active-class':''}>
              Reviews
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#blogs" onClick={()=>handleActive('blogs')} className={isActive==='blogs'?'active-class':''}>
              Blogs
            </Nav.Link>
           

            {user?.displayName ? (
              <>
               <Nav.Link as={HashLink} to="/addoffer" onClick={()=>handleActive('addResort')} className={isActive==='addResort'?'active-class':''}>
                  Add Resort
                </Nav.Link>
                <Nav.Link as={HashLink} to="/my-bookings" onClick={()=>handleActive('myBooking')} className={isActive==='myBooking'?'active-class':''}>
                  My Bookings
                </Nav.Link>
                <Nav.Link as={HashLink} to="/manage-bookings" onClick={()=>handleActive('manageResort')} className={isActive==='manageResort'?'active-class':''}>
                  Manage Bookings
                </Nav.Link>
                <Navbar.Text>
                  
                  <a className="user-name" href="#login">
                    {user.displayName}
                  </a>
                </Navbar.Text>
                <button onClick={logOut} className="header-btn">
                  <b>Logout</b>
                </button>
              </>
            ) : (
              <>
                
                <Nav.Link as={HashLink} to="/login">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
