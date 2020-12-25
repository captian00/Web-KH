import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
} from "reactstrap";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../style/styleHeader.css";
const styles = {
  color: "#6FA8DC",
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState("/");

  const toggle = () => setIsOpen(!isOpen);

  const pathname = window.location.pathname;

  return (
    <Navbar
      light
      expand="md"
      className="sticky-top"
      style={{ backgroundColor: "#EEE" }}
    >
      <NavbarToggler onClick={toggle} />
      <Nav>
        <NavItem className="logo_1">
          <NavLink href="/">
            <img src={logo} alt="logo"></img>
          </NavLink>
        </NavItem>
      </Nav>
      <Collapse isOpen={isOpen} navbar className="menu_special">
        <Nav className="header">
          <NavItem className="logo_2">
            <NavLink href="/">
              <img src={logo} alt="logo"></img>
            </NavLink>
          </NavItem>
          <NavItem className="menu">
            <Row>
              <Col sm="2">
                {" "}
                <NavLink>
                  <Link
                    to="/"
                    style={pathname == "/" ? styles : {}}
                    onClick={() => setState("/")}
                  >
                    TRANG CHỦ
                  </Link>
                </NavLink>
              </Col>
              <Col sm="2">
                <NavLink>
                  <Link
                    to="/gioithieu"
                    style={pathname == "/gioithieu" ? styles : {}}
                    onClick={() => setState("gioithieu")}
                  >
                    GIỚI THIỆU
                  </Link>
                </NavLink>
              </Col>
              <Col sm="2" md="3">
                <NavLink>
                  <Link
                    to="/tracuu"
                    style={pathname == "/tracuu" ? styles : {}}
                    onClick={() => setState("tracuu")}
                  >
                    TRA CỨU ĐƠN HÀNG
                  </Link>
                </NavLink>{" "}
              </Col>
              <Col sm="2" md="3">
                {" "}
                <NavLink>
                  <Link
                    to="/banggia"
                    style={pathname == "/banggia" ? styles : {}}
                    onClick={() => setState("banggia")}
                  >
                    BẢNG GIÁ VẬN CHUYỂN
                  </Link>
                </NavLink>
              </Col>
              <Col sm="2">
                <NavLink>
                  <Link
                    to="/lienhe"
                    style={pathname == "/lienhe" ? styles : {}}
                    onClick={() => setState("lienhe")}
                  >
                    LIÊN HỆ
                  </Link>
                </NavLink>{" "}
              </Col>
            </Row>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
