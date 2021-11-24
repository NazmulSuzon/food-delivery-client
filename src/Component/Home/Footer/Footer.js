import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import icon from '../../../images/icon/foodota-logo-main.png';
import healthyFood from '../../../images/footer-img/healthy-food1.jpg';
import burgur from '../../../images/footer-img/burger.jpg'
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-secondary mt-5 text-light">
            <Container className="py-5">
            <Row>
                <Col>
                    <div className="icon">
                    <img src={icon} alt="" />
                    </div>
                    <p>One is to focus on the quality of your meat. If you <br /> can call out organic beef, sustainable farming.</p>
                    <p><span className="fs-5">Phone: </span> <span className="fw-bold">01822222222</span></p>
                    <p><span className="fs-5">Email: </span> <span className="fw-bold">khuda.lagche@gmail.com</span></p>
                </Col>
                <Col>
                    <h1 className="text-warning fw-bold">Our Services</h1>
                    <ul className="fs-4 me-5">
                        <ol>Services</ol>
                        <ol>Items</ol>
                        <ol>Healthy Food</ol>
                        <ol>Delivery Food</ol>
                    </ul>
                </Col>
                <Col>
                    <h1 className="text-warning fw-bold">Latest News</h1>
                    <div className=" mt-4 d-flex">
                        <div className="healthy-food ">
                            <img src={healthyFood} alt="" />
                        </div>
                        <div className="ps-5 fw-bold">
                            <h5>50 Super Healthy Food</h5>
                            <p>Date: 1 March 2021</p>
                        </div>
                    </div>
                    <div className=" mt-4 d-flex">
                        <div className="healthy-food ">
                            <img src={burgur} alt="" />
                        </div>
                        <div className="ps-5 fw-bold">
                            <h5>Barbecue Burgers</h5>
                            <p>Date: 1 March 2021</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Footer;