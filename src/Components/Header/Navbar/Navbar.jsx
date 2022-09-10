import React from "react";
import logo from "../../../assets/img/artemis-logo-color.png";
/* import { Link } from "react-router-dom"; */
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light col-md-11 ">
      <a className="navbar-brand" href={"/"}>
        <img className="animate__animated animate__fadeIn" src={logo} alt="logo" width="100px" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Información</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/">Cactus</a></li>
              <li><a class="dropdown-item" href="/">Suculentas</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catálogo</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/">Interior y Exterior</a></li>
              <li><a class="dropdown-item" href="/">Tierra de hoja</a></li>
              <li><a class="dropdown-item" href="/">Sustratos</a></li>
              <li><a class="dropdown-item" href="/">Maceteros</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar