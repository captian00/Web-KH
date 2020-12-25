import React, { Component } from "react";
import { Col, Row, Table } from "react-bootstrap";

export default class Price extends Component {
  render() {
    return (
      <div>
        <h1>Bảng giá sản phẩm</h1>;
        <Row>
          <Col></Col>
          <Col sm={8}>
            <Table bordered>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Loại vận chuyển</th>
                  <th>Bảng giá(VND)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Nội Thành</td>
                  <td>5.000.000</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ngoại Thành</td>
                  <td>75.000</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Xuyên Tỉnh</td>
                  <td>100.000</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Xuất Ngoại</td>
                  <td>1.000.500</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Nội Thành</td>
                  <td>50.000</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Xuất Ngoại</td>
                  <td>10.000.000</td>
                </tr>

              </tbody>
            </Table>
            {/* <div class="table-responsive">
              <table class="table table-hover"></table>
            </div> */}
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}
