import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import img1 from "../assets/images/client-1.webp";
import img2 from "../assets/images/client-2.webp";
import img3 from "../assets/images/client-3.webp";
import img4 from "../assets/images/client-4.webp";
import img5 from "../assets/images/client-5.webp";
import img6 from "../assets/images/client-6.webp";
import "../Styles/Clients.css";

class Clients extends Component {
  render() {
    const images = [img1, img2, img3, img4, img5, img6];
    return (
      <Container className="py-4 mt-4 clients-container">
        <Row className="justify-content-center g-4">
          {images.map((image, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center">
              <img
                src={image}
                alt={`Client ${index + 1}`}
                className="client-img"
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Clients;
