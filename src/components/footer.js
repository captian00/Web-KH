import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Icon } from "react-icons-kit";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { youtubeSquare } from "react-icons-kit/fa/youtubeSquare";
import { linkedin } from "react-icons-kit/icomoon/linkedin";
import { Link } from "react-router-dom";

import "../style/styleFooter.css";
export default class Footer extends Component {
  render() {
    return (
      <div className="flex-end">
        <div className="footer">
          <Container style={{ margin: "0 auto", maxWidth: "90%" }}>
            <Row style={{ paddingTop: "1em" }}>
              <Col md="6">
                <h5 style={{ color: "#66ff66" }}>
                  VINTRANS - HỆ THỐNG VẬN CHUYỂN TẠI VIỆT NAM
                </h5>
              </Col>
              <Col md="6" className="icon">
                <a href="https://www.facebook.com/">
                  <Icon
                    size="32"
                    icon={facebookSquare}
                    style={{ color: "#4267b2" }}
                  />
                </a>
                <a href="https://www.youtube.com">
                  <Icon
                    size="32"
                    icon={youtubeSquare}
                    style={{ color: "#ff4d4d" }}
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <Icon size="32" icon={linkedin} style={{ color: "#33cc" }} />
                </a>
              </Col>
            </Row>
            <Row className="canvas"></Row>
            <Row className="menu">
              <Col lg="3" md="6">
                <p>
                  {/* <a href="#">LIÊN HỆ</a> */}
                  <Link to="/lienhe">LIÊN HỆ</Link>
                </p>
                <div>
                  HOTLINE
                  <p>0964 66 33 99</p>
                </div>
                <div>
                  EMAIL
                  <p>CSKH@gmail.com</p>
                </div>
              </Col>

              <Col lg="3" md="6">
                <p>
                  {/* <a href="#">Về Vitrans</a> */}
                  <Link to="/gioithieu">Về Vitrans</Link>
                </p>
                <p>
                  <a href="#">Về chúng tôi</a>
                </p>
                <p>
                  <a href="#">Quy chế hoạt động</a>
                </p>
              </Col>

              <Col lg="3" md="6">
                <p>
                  <a href="#">Chính sách</a>
                </p>
                <p>
                  <a href="#">Chính sách bảo hiểm cá nhân</a>
                </p>
                <p>
                  <a href="#">Chính sách bảo mật</a>
                </p>
              </Col>

              <Col lg="3" md="6">
                <p>
                  <a href="#">Fag</a>
                </p>
                <p>
                  <a href="#">Hướng dẫn mua hàng gửi hàng</a>
                </p>
                <p>
                  <a href="#">Hướng dẫn thanh toán</a>
                </p>
                <p>
                  <a href="#">Các câu hỏi thường gặp</a>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
