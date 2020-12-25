import React, { Component } from "react";
import callAPI from "../API/callAPI";
import { Row, Col, FormGroup, Input, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
class Change extends Component {
  constructor() {
    super();
    this.state = {
      listCustomers: [],
      table_1: true,
      CodeOrders: "",
      nameK: "",
      phone: "",
      nameG: "",
      cost: "",
      status: "",
      date: "",
    };
  }
  componentDidMount() {
    //    console.log(this.props.match.params.id)
    callAPI("order", "GET", null).then((res) => {
      const Change = res.data.filter(
        (value) => value.id == Number(this.props.match.params.id)
      );
        // console.log(Change);
      this.setState({
        CodeOrders: Change[0].CodeOrders,
        nameK: Change[0].nameK,
        phone: Change[0].phone,
        nameG: Change[0].nameG,
        cost: Change[0].cost,
        status: Change[0].status,
        date: Change[0].date,
      });
    });
  }
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };
  OnClick = (event) => {
    var id = this.props.match.params.id;
    var { history } = this.props;
    console.log(id);
    var { CodeOrders, nameK, phone, nameG, cost, status, date } = this.state;
    callAPI(`order/${id}`, "PUT", {
      CodeOrders: CodeOrders,
      nameK: nameK,
      phone: phone,
      nameG: nameG,
      cost: cost,
      status: status,
      date: date,
    }).then((res) => {
      history.goBack();
    });
  };
  render() {
    const { CodeOrders, nameK, phone, nameG, cost, status, date } = this.state;
    return (
      <Container className="add">
        <h4>Đơn Hàng</h4>
        <Container>
          
          <Row>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Nhập Mã Đơn"
                  name="CodeOrders"
                  value={CodeOrders}
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
                  placeholder="Tên Khách"
                  name="nameK"
                  value={nameK}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Số Điện Thoại"
                  name="phone"
                  value={phone}
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
                  placeholder="Tên Gom"
                  name="nameG"
                  value={nameG}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Giá Thành"
                  name="cost"
                  value={cost}
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
                  placeholder="Trạng Thái"
                  name="status"
                  value={status}
                  onChange={this.onChange}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Ngày Gửi"
                  name="date"
                  value={new Date(date).toString()}
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
            <Button
              type="submit"
              color="success"
              className="btn-add "
              onClick={this.OnClick}
            >
              Lưu
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Change;
