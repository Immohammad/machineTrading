import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate, NavLink, useLocation } from "react-router-dom";
import logo from "./assets/photo_2022-10-19_23-47-29.jpg";
import Container from "react-bootstrap/Container";

const Navbars = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  return (
    <Navbar sticky="top" expand="sm" collapseOnSelect className="navbarFont">
      <Navbar.Brand>
        <img src={logo} id="navbarLogo" />{" "}
      </Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-between">
        <Nav>
          {/* <NavDropdown
            title="حساب کاربری"
            id="nav-dropdown"
            className="navbarFont"
          >
            <NavDropdown.Item as={Link} to="/login">
              ثبت نام
            </NavDropdown.Item>
            <NavDropdown.Item>ورود</NavDropdown.Item>
          </NavDropdown> */}

          {localStorage.getItem("token") ? (
            <Nav.Link
              as={Link}
              to="/dashboard"
              className={`${
                location.pathname.includes("/dashboard")
                  ? "navbarFontActive"
                  : "navbarFont"
              }`}
            >
              حساب کاربری
            </Nav.Link>
          ) : (
            <Nav.Link
              as={Link}
              to="/login"
              className={`${
                location.pathname === "/login"
                  ? "navbarFontActive"
                  : "navbarFont"
              }`}
            >
              ورود یا ثبت نام
            </Nav.Link>
          )}

          <Nav.Link
            as={Link}
            to="/"
            className={`${
              location.pathname === "/" ? "navbarFontActive" : "navbarFont"
            }`}
          >
            صفحۀ اصلی
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/aboutUs"
            className={`${
              location.pathname === "/aboutUs"
                ? "navbarFontActive"
                : "navbarFont"
            }`}
          >
            دربارۀ ما
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="https://www.youtube.com/@traders_land_ir"
            className="navbarFont"
            target="_blank"
            rel="noopener noreferrer"
          >
            تریدرز کالج
          </Nav.Link>
        </Nav>
        {/* <div style={{ margin: "20px", border: "2px solid green", borderRadius: "8px", padding: "5px" }}> */}
        <div
          style={{
            margin: "15px",
            // border: "solid 2px green",
            backgroundColor:'white',
            color:'#334456',
            borderRadius: "8px",
            padding: "5px",
          }}
        >
          <span style={{ margin: "20px" }}>پیش‌بینی هفتگی بازار  </span>
          شاخص کل:
          <span style={{ margin: "20px", color:'green' }}> صعودی (68%)</span>
          <span>|</span> شاخص هم‌وزن:
          <span style={{ margin: "20px" , color:'green'}}> صعودی (90%)</span>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;
