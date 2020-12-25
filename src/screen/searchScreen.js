import React, { Component } from "react";
import "../style/styleSearch.css";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col, Label, Button } from "reactstrap";
import { Table } from "reactstrap";
import { Icon } from "react-icons-kit";
import { ic_create } from "react-icons-kit/md/ic_create";
import { ic_delete_forever } from "react-icons-kit/md/ic_delete_forever";
import { plus } from "react-icons-kit/fa/plus";
import { Link, useHistory } from "react-router-dom";
import { info } from "react-icons-kit/fa/info";
import {toDateString} from "../help/toDate.js";
import callAPI from "../API/callAPI";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      id: "",
      index: "",
      table_1: true,
      listCustomers: [],
      listCustomersFilter: [],
      orderCode: "",
      detail: [],
    };
  }

  componentDidMount() {
    callAPI("order", "GET", null).then((res) => {
      let x = res.data;
      console.log(x,"ok",typeof(x));
      this.setState({
        listCustomers: res.data,
        listCustomersFilter: res.data,
      });
    });
  }
  handleShow = (e) => {
    // console.log(id, index);
    this.setState({
      show: true,
      // listCustomersFilter: [
      //   ...listCustomersFilter.slice(0, index),
      //   ...listCustomersFilter.slice(index + 1),
      // ],
    });
  };
  handleCloseSave = (e) => {
    const { id, index, listCustomersFilter } = this.state;
    this.setState({
      show: false,
      listCustomersFilter: [
        ...listCustomersFilter.slice(0, index),
        ...listCustomersFilter.slice(index + 1),
      ],
    });
    callAPI(`order/${id}`, "DELETE", null);
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  OnClickShowAll = (e) => {
    const { listCustomers, listCustomersFilter } = this.state;
    this.setState({
      listCustomersFilter: listCustomers,
    });
  };
  onHandlerChange = (e) => {
    this.setState({
      orderCode: e.target.value,
    });
  };

  onHandlerSubmit = (e) => {
    const { orderCode, listCustomers, listCustomersFilter } = this.state;
    this.setState({
      listCustomersFilter: listCustomers.filter((value) =>
        String(value.CodeOrders).includes(orderCode)
      ),
    });
  };
  onHandlerKeyPress = (e) => {
    const { orderCode, listCustomers, listCustomersFilter } = this.state;
    if (e.charCode === 13) {
      this.setState({
        listCustomersFilter: listCustomers.filter((value) =>
          String(value.CodeOrders).includes(orderCode)
        ),
      });
    }
  };
  render() {
    const { customers } = this.props;
    const { listCustomers } = this.state;

    return (
      <div className="search">
        <Container>
          <Row className="form-search">
            <Col>
              <Label>
                <strong>Nhập mã đơn hàng: </strong>
              </Label>
            </Col>
            <Col>
              <span>
                <input
                  type="text"
                  className="text-search"
                  onChange={this.onHandlerChange}
                  value={this.state.orderCode}
                  onKeyPress={this.onHandlerKeyPress}
                />
              </span>
            </Col>
            <Col>
              <Button
                color="primary"
                className="btn-search"
                onClick={this.onHandlerSubmit}
              >
                Tìm kiếm
              </Button>
              <Button
                color="warning"
                className="btn-search"
                style={{ marginLeft: "0.3em" }}
                onClick={this.OnClickShowAll}
              >
                Hiển thị tất cả
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/themdonhang" style={{ textDecoration: "none" }}>
                <Button color="success" className="btn-add">
                  <Icon size="28" icon={plus} />
                  Thêm đơn hàng
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Danh sách đơn hàng</h3>
              <div >
                <Table
                  bordered
                  style={
                    this.state.table_1 ? { display: "" } : { display: "none" }
                  }
                  className="table-lg"
                >
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã đơn hàng</th>
                      <th>Khách hàng</th>
                      <th>Số điện thoại</th>
                      <th>Gom hàng</th>
                      <th>Phí vận chuyển</th>
                      <th>Trạng thái TĐ</th>
                      <th>Ngày gửi</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.listCustomersFilter?.map((customer, key) => (
                      <tr>
                        <th>{key + 1}</th>
                        <th>{customer.CodeOrders}</th>
                        <th>{customer.nameK}</th>
                        <th>{customer.phone}</th>
                        <th>{customer.nameG}</th>
                        <th>{customer.cost}</th>
                        <th>{customer.status}</th>
                        <th>{toDateString(new Date(customer.date).toString())}</th>
                        <th>
                          <Row>
                            {/* <Col>
                              <Link
                                className="md-10"
                                to={"/chitiet" + "/" + customer.CodeOrders}
                              >
                                <Icon
                                  style={{ color: "blue" }}
                                  icon={info}
                                  size={20}
                                />
                              </Link>
                            </Col> */}
                            <Col style={{ margin: "0 5px", padding: "0" }}>
                              {" "}
                              <Link
                                className="md-10"
                                to={"/sua" + "/" + customer.id}
                              >
                                <Icon icon={ic_create} size={20}></Icon>
                              </Link>
                            </Col>
                            <Col style={{ margin: "0 5px", padding: "0" }}>
                              <Link>
                                {" "}
                                <Icon
                                  icon={ic_delete_forever}
                                  size={20}
                                  style={{ color: "red" }}
                                  onClick={() => {
                                    this.handleShow();
                                    this.setState({
                                      id: customer.id,
                                      index: key,
                                    });
                                  }}
                                ></Icon>
                              </Link>
                            </Col>
                            <Col style={{ margin: "0 5px", padding: "0" }}>
                              <Link
                                className="md-10"
                                to={"/chitiet" + "/" + customer.CodeOrders}
                              >
                                <Icon
                                  style={{ color: "blue" }}
                                  icon={info}
                                  size={20}
                                />
                              </Link>
                            </Col>
                          </Row>
                        </th>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>{" "}
        </Container>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Xóa</Modal.Title>
          </Modal.Header>
          <Modal.Body>Bạn có chắc chắn muốn xóa không ??</Modal.Body>
          <Modal.Footer>
            <Button color="secondary" onClick={this.handleClose}>
              Đóng
            </Button>
            <Button color="primary" onClick={this.handleCloseSave}>
              Có
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default Search;
