import React, { Component } from "react";
import callAPI from "../API/callAPI";
import { Table } from "reactstrap";
class Detail extends Component {
  constructor() {
    super();
    this.state = {
      listCustomers: [],
      Detail: [],
      table_1: true,
    };
  }
  componentDidMount() {
    callAPI("order", "GET", null).then((res) => {
      this.setState({
        Detail: res.data.filter(
          (value) =>
            value.CodeOrders == Number(this.props.match.params.orderCode)
        ),
      });
    });
  }
  OnClick = () => {
    var { history } = this.props;
    history.goBack();
  };
  render() {
    return (
      <div>
        <h4>Thông Tin Chi Tiết</h4>
        <Table className="table"
          bordered
          style={this.state.table_1 ? { display: "" } : { display: "none" }}
        >
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Khách hàng</th>
              <th>Số điện thoại</th>
              <th>Gom hàng</th>
              <th>Phí vận chuyển</th>
              <th>Trạng thái TĐ</th>
              <th>Ngày gửi</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Detail?.map((customer, key) => (
              <tr>
                <td>{customer.CodeOrders}</td>
                <td>{customer.nameK}</td>
                <td>{customer.phone}</td>
                <td>{customer.nameG}</td>
                <td>{customer.cost}</td>
                <td>{customer.status}</td>
                <td>{new Date(customer.date).toString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <button onClick={this.OnClick} type="button" class="btn btn-primary">
          Quay Lại
        </button>
      </div>
    );
  }
}
export default Detail;
