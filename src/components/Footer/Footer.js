
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container >
        <Row>
          <Col md="9">
            <h1 className="title">LSV-TEACH</h1>
            <text>Prueba Tecnica Desarrollador Frontend</text>
          </Col>

          <Col md="3">
            <h3 className="title">Developer by:</h3>
            <div className="btn-wrapper profile">
              <Row>
                <i class="fas fa-user-circle" />
                <text> Andres Felipe Cuevas Quiroga</text>
              </Row>
              <Row>
                <i class="far fa-envelope-open" />
                <text> Email: andres-felipe32@hotmail.com</text>
              </Row>
              <Row>
                <i class="fas fa-phone" />
                <text> Phone: 3212431469</text>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
