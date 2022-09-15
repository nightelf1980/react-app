import React from "react";
import logo from "../../../assets/img/artemis-logo-color.png";
/* import { NavLink } from "react-router-dom"; */
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light col-md-11 ">
      <a className="navbar-brand" href="/">
        <img className="animate__animated animate__fadeIn" src={logo} alt="logo" width="100px" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Información</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/nosotros">Nosotros</a></li>
              <li><a className="dropdown-item" href="/servicios">Servicios</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/catalogo" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catálogo</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/catalogo">Interior y Exterior</a></li>
              <li><a className="dropdown-item" href="/catalogo">Tierra de hoja</a></li>
              <li><a className="dropdown-item" href="/catalogo">Sustratos</a></li>
              <li><a className="dropdown-item" href="/catalogo">Maceteros</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar