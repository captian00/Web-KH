import React, { Component } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import { FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import callAPI from "../API/callAPI";

import "../style/styleAdd.css";

export default class Add extends Component {
  constructor() {
    super();
    this.state = {
      CodeOrders: "",
      MaDonHang: "",
      KhachHang: "",
      SoDienThoai: "",
      GomHang: "",
      PhiVanChuyen: "",
      TrangThaiTD: "",
      NgayGui: "",
    };
  }
  OnClick = (event) => {
    var {
      MaDonHang,
      KhachHang,
      SoDienThoai,
      GomHang,
      PhiVanChuyen,
      TrangThaiTD,
      NgayGui,
    } = this.state;
    var {history} =  this.props;
    callAPI("order", "POST", {
      CodeOrders: MaDonHang,
      nameK: KhachHang,
      phone: SoDienThoai,
      nameG: GomHang,
      cost: PhiVanChuyen,
      status: TrangThaiTD,
      date: NgayGui,
    }).then((res) => {
      history.goBack();
    });
  };
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    var {
      MaDonHang,
      KhachHang,
      SoDienThoai,
      GomHang,
      PhiVanChuyen,
      TrangThaiTD,
      NgayGui,
    } = this.state;
    return (
      <Container className="add">
        <h4>Đơn Hàng</h4>
        <Container>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Mã đơn hàng"
                  name="MaDonHang"
                  value={MaDonHang}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Khách hàng"
                  name="KhachHang"
                  value={KhachHang}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="number"
                  placeholder="Số điện thoại"
                  name="SoDienThoai"
                  value={SoDienThoai}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Gom hàng"
                  name="GomHang"
                  value={GomHang}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Phí vận chuyển"
                  name="PhiVanChuyen"
                  value={PhiVanChuyen}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Trạng thái TĐ"
                  name="TrangThaiTD"
                  value={TrangThaiTD}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="date"
                  placeholder="Ngày gửi"
                  name="NgayGui"
                  value={NgayGui}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col>
            <Link to="/tracuu" style={{ textDecoration: "none" }}>
              <Button color="success" className="btn-add btn-danger">
                Quay lại
              </Button>
            </Link>
          </Col>
          <Col>
            {/* <Link to="/tracuu" style={{ textDecoration: "none" }}> */}
            <Button
              type="submit"
              color="success"
              className="btn-add "
              onClick={this.OnClick}
            >
              Lưu
            </Button>
            {/* </Link> */}
          </Col>
        </Row>
      </Container>
    );
  }
}
