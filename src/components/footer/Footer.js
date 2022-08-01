import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./../mailchimpForm/MailchimpForm";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col
            sm={6}
            className="d-flex justify-content-center justify-content-sm-start mb-4 mb-sm-0"
          >
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="/">
                <img src={navIcon2} alt="" />
              </a>
              <a href="/">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
