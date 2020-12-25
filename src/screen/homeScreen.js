import React, { Component } from 'react';
import '../style/styleHome.css';

import { Container, Col, Row } from 'reactstrap';
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';

import header from '../images/header.png';
import icon_1 from '../images/icon-1.png';
import icon_2 from '../images/icon-2.png';
import icon_3 from '../images/icon-3.png';
import icon_4 from '../images/icon-4.png';

import card_1 from '../images/card-1.png'
import card_2 from '../images/card-2.png'
import card_3 from '../images/card-3.png'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <img src={header} alt="header"></img>
                <h2>TẠI SAO NÊN CHỌN VINTRANS</h2>
                <Container className="container">
                    <Row>
                        <Col md="3">
                            <div>
                                <img src={icon_1} alt="icon_1" style={{maxWidth: "56px",float:"left"}}></img>
                                <span><strong>VẬN CHUYỂN HÀNG HÓA NHANH CHÓNG AN TOÀN</strong></span>
                            </div>
                            <br/>    
                            <p>Thời gian từ lúc gửi đến lúc nhận hàng trong vòng 1- 3 ngày.</p>   
                        </Col>

                        <Col md="3">
                            <div>
                                <img src={icon_2} alt="icon_2" style={{maxWidth: "56px",float:"left"}}></img>
                                <span><strong>VẬN CHUYỂN HÀNG HÓA NHANH CHÓNG AN TOÀN</strong></span>
                            </div>
                            <br/>    
                            <p>Thời gian từ lúc gửi đến lúc nhận hàng trong vòng 1- 3 ngày.</p>   
                        </Col>

                        <Col md="3">
                            <div>
                                <img src={icon_3} alt="icon_3" style={{maxWidth: "56px",float:"left"}}></img>
                                <span><strong>VẬN CHUYỂN HÀNG HÓA NHANH CHÓNG AN TOÀN</strong></span>
                            </div>
                            <br/>    
                            <p>Thời gian từ lúc gửi đến lúc nhận hàng trong vòng 1- 3 ngày.</p>   
                        </Col>

                        <Col md="3">
                            <div>
                                <img src={icon_4} alt="icon_4"style={{maxWidth: "56px",float:"left"}}></img>
                                <span><strong>VẬN CHUYỂN HÀNG HÓA NHANH CHÓNG AN TOÀN</strong></span>
                            </div>
                            <br/>    
                            <p>Thời gian từ lúc gửi đến lúc nhận hàng trong vòng 1- 3 ngày.</p>   
                        </Col>
                    </Row>
                </Container>

                <div className="content">
                    <Container>
                        <h2 style={{paddingTop: "1em"}}>DỊCH VỤ VẬN CHUYỂN</h2>
                        <Row className="service">
                            <Col md="4">
                                <Card>
                                    <CardTitle><strong>VẬN CHUYỂN LIÊN TỈNH</strong></CardTitle>
                                    <CardImg top width="100%" src={card_1} alt="Card image cap" />
                                    <CardBody>
                                        <Button>Xem thêm</Button>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col md="4">
                                <Card>
                                    <CardTitle><strong>VẬN CHUYỂN NỘI TỈNH</strong></CardTitle>
                                    <CardImg top width="100%" src={card_2} alt="Card image cap" />
                                    <CardBody>
                                        <Button>Xem thêm</Button>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col md="4">
                                <Card>
                                    <CardTitle><strong>CHUYỂN PHÁT NHANH</strong></CardTitle>
                                    <CardImg top width="100%" src={card_3} alt="Card image cap" />
                                    <CardBody>
                                        <Button>Xem thêm</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>          
            </div>
        ) 
    } 
}