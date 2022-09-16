/* import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';


import CartWidget from "../CartWidget/CartWidget";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import "./Navbar.css"

class Navigation extends Component {
  render() {
    return (
      <div className="container-fluid row d-flex bg-light justify-content-center">
        <nav className="navbar navbar-expand-lg navbar-light col-md-11">
          <Navbar.Brand className="navbar-brand">
            <Nav.Link className="nav-link" to="/" ><img className="animate__animated animate__fadeIn" src={logo} alt="logo" width="100px" /></Nav.Link>
          </Navbar.Brand>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem className="nav-item">
                <Nav.Link className="nav-link" to="/pages/servicios" >Servicios</Nav.Link>
              </NavItem>
              <NavItem className="nav-item">
                <Nav.Link to="/pages/catalogo" >Catálogo</Nav.Link>
              </NavItem>
              <NavItem className="nav-item">
                <Nav.Link className="nav-link" to="/pages/nosotros" >Nosotros</Nav.Link>
              </NavItem>
            </ul>
          </div>
        </nav>
        <CartWidget />
      </div>
    )
  }
}

export default Navigation */


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../../../assets/img/artemis-logo-color.png";
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";
/* import NavDropdown from 'react-bootstrap/NavDropdown'; */

const NavigationBar = () => {
  return (
    <>
      <Navbar className="container-fluid row d-flex bg-light justify-content-center" bg="light" variant="light">
        <Container className="navbar navbar-expand-lg navbar-light col-md-11">
          <Navbar.Brand href="/"><img className="animate__animated animate__fadeIn" src={logo} alt="logo" width="100px" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/pages/nosotros">NOSOTROS</Nav.Link>
            <Nav.Link href="/pages/catalogo">CATÁLOGO</Nav.Link>
{/*             <NavDropdown title="CATÁLOGO" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/pages/catalogo/1">PLANTAS DE INTERIOR Y EXTERIOR</NavDropdown.Item>
              <NavDropdown.Item href="/pages/catalogo/2">TIERRA DE HOJA</NavDropdown.Item>
              <NavDropdown.Item href="/pages/catalogo/3">SUSTRATOS</NavDropdown.Item>
              <NavDropdown.Item href="/pages/catalogo/4">MACETEROS</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/pages/servicios">SERVICIOS</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
      
    </>
  );
}

export default NavigationBar;