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
import { toDateString } from "../help/toDate.js";
import callAPI from "../API/callAPI";
import ContentLoader, { Facebook } from "react-content-loader";

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
      loading: true,
    };
  }

  componentDidMount() {
    callAPI("order", "GET", null).then((res) => {
      let x = res.data;
      console.log(x, "ok", typeof x);
      this.setState({
        loading: false,
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
    const { listCustomers, loading } = this.state;

    if (loading) {
      return (
        // <ContentLoader></ContentLoader>
        <div className="box--shadow">
          <ContentLoader
            width="100%"
            height="100%"
            speed={2}
            // viewBox="0 0 1000 550"
            viewBox="25 20 959 550"
            padding="0px"
            backgroundColor="#eaeced"
            foregroundColor="#ffffff"
            // {...props}
          >
            <rect x="51" y="45" rx="3" ry="3" width="906" height="17" />
            <circle cx="879" cy="123" r="11" />
            <circle cx="914" cy="123" r="11" />
            <rect x="104" y="115" rx="3" ry="3" width="141" height="15" />
            <rect x="305" y="114" rx="3" ry="3" width="299" height="15" />
            <rect x="661" y="114" rx="3" ry="3" width="141" height="15" />
            <rect x="55" y="155" rx="3" ry="3" width="897" height="2" />
            <circle cx="880" cy="184" r="11" />
            <circle cx="915" cy="184" r="11" />
            <rect x="105" y="176" rx="3" ry="3" width="141" height="15" />
            <rect x="306" y="175" rx="3" ry="3" width="299" height="15" />
            <rect x="662" y="175" rx="3" ry="3" width="141" height="15" />
            <rect x="56" y="216" rx="3" ry="3" width="897" height="2" />
            <circle cx="881" cy="242" r="11" />
            <circle cx="916" cy="242" r="11" />
            <rect x="106" y="234" rx="3" ry="3" width="141" height="15" />
            <rect x="307" y="233" rx="3" ry="3" width="299" height="15" />
            <rect x="663" y="233" rx="3" ry="3" width="141" height="15" />
            <rect x="57" y="274" rx="3" ry="3" width="897" height="2" />
            <circle cx="882" cy="303" r="11" />
            <circle cx="917" cy="303" r="11" />
            <rect x="107" y="295" rx="3" ry="3" width="141" height="15" />
            <rect x="308" y="294" rx="3" ry="3" width="299" height="15" />
            <rect x="664" y="294" rx="3" ry="3" width="141" height="15" />
            <rect x="58" y="335" rx="3" ry="3" width="897" height="2" />
            <circle cx="881" cy="363" r="11" />
            <circle cx="916" cy="363" r="11" />
            <rect x="106" y="355" rx="3" ry="3" width="141" height="15" />
            <rect x="307" y="354" rx="3" ry="3" width="299" height="15" />
            <rect x="663" y="354" rx="3" ry="3" width="141" height="15" />
            <rect x="57" y="395" rx="3" ry="3" width="897" height="2" />
            <circle cx="882" cy="424" r="11" />
            <circle cx="917" cy="424" r="11" />
            <rect x="107" y="416" rx="3" ry="3" width="141" height="15" />
            <rect x="308" y="415" rx="3" ry="3" width="299" height="15" />
            <rect x="664" y="415" rx="3" ry="3" width="141" height="15" />
            <rect x="55" y="453" rx="3" ry="3" width="897" height="2" />
            <rect x="51" y="49" rx="3" ry="3" width="2" height="465" />
            <rect x="955" y="49" rx="3" ry="3" width="2" height="465" />
            <circle cx="882" cy="484" r="11" />
            <circle cx="917" cy="484" r="11" />
            <rect x="107" y="476" rx="3" ry="3" width="141" height="15" />
            <rect x="308" y="475" rx="3" ry="3" width="299" height="15" />
            <rect x="664" y="475" rx="3" ry="3" width="141" height="15" />
            <rect x="55" y="513" rx="3" ry="3" width="897" height="2" />
            <rect x="52" y="80" rx="3" ry="3" width="906" height="17" />
            <rect x="53" y="57" rx="3" ry="3" width="68" height="33" />
            <rect x="222" y="54" rx="3" ry="3" width="149" height="33" />
            <rect x="544" y="55" rx="3" ry="3" width="137" height="33" />
            <rect x="782" y="56" rx="3" ry="3" width="72" height="33" />
            <rect x="933" y="54" rx="3" ry="3" width="24" height="33" />
          </ContentLoader>
        </div>
      );
    } else
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
                <div>
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
                          <th>
                            {toDateString(new Date(customer.date).toString())}
                          </th>
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
