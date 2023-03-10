import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/photo_2022-10-19_23-47-29.jpg";
import { useContext, useState } from "react";

const Navbars = () => {
  // const navigate = useNavigate();

  return (
    <Navbar sticky="top" expand="sm" collapseOnSelect className="navbarFont">
      <Navbar.Brand className="navbarFont">
        <img src={logo} id="navbarLogo" />{" "}
        {/* <span style={{ color: "#E31229" , paddingRight:'10px'}}>تریدرزلند</span> */}
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          {/* <NavDropdown
            title="حسین گوز"
            id="nav-dropdown"
            className="navbarFont"
          >
            <NavDropdown.Item as={Link} to="/dashboard">
              حساب کاربری
            </NavDropdown.Item>
            <NavDropdown.Item>خروج</NavDropdown.Item>
          </NavDropdown> */}

          <Nav.Link as={Link} to="/login" className="navbarFont">
            پروفایل
          </Nav.Link>
          <Nav.Link as={Link} to="/" className="navbarFont">
            صفحۀ اصلی
          </Nav.Link>
          <Nav.Link as={Link} to="/aboutUs" className="navbarFont">
            دربارۀ ما
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="https://www.youtube.com/@traders_land_ir4581"
            className="navbarFont"
            target="_blank"
            rel="noopener noreferrer"
          >
            تریدرز کالج
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
