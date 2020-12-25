import React, { Component } from 'react';
import '../style/styleContact.css';
import {Icon} from 'react-icons-kit';
import {locationArrow} from 'react-icons-kit/fa/locationArrow'

import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <Container>
                    <Row className="row">
                        <Col md="6">
                            <Form>
                                <FormGroup row>
                                    <Input type="text" name="name" id="name" placeholder="Họ và tên"/>
                                </FormGroup>
                                <FormGroup row>
                                    <Input type="email" name="email" id="email" placeholder="Email" />
                                </FormGroup>
                                <FormGroup row>
                                    <Input type="text" name="phone" id="phone" placeholder="Số điện thoại" />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md="5">
                           <Form>
                               <FormGroup row>
                                    <Input type="textarea" name="text" id="text" placeholder="Lời nhắn..."/>
                               </FormGroup>
                           </Form>
                        </Col>
                    </Row>
                    <div>
                        <Button color="primary" className="btn-submit">
                            <Icon size={16} icon={locationArrow}>
                            </Icon>
                            Gửi
                        </Button>
                    </div>
                    <div className="canvas">
                        <p className="canvas_child"></p>
                    </div>
                    <div className="infor">
                        <strong>THÔNG TIN KHO HÀNG</strong>
                        <ul>
                            <li>Kho Hà Nội: Số 19, ngõ 12, đường Phan Văn Trường, Cầu Giấy, Hà Nội</li>
                            <li>Kho Đà Nẵng: K42/34 Nguyễn Thành Hãn, Hải Châu, Đà Nẵng</li>
                            <li>Kho Hồ Chí Minh: Số 50, đường T4B, Tây Thạnh, Tân Phú, Hồ Chí Minh</li>
                            <li>Hotline:  0389.986.002 / 02422.649.898</li>
                        </ul>
                    </div>  
                       
                </Container>
            </div>
        )
    }
}