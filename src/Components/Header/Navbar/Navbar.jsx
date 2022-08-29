import React from "react";
import logo from "../../../Assets/img/artemis-logo-color.png";
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
            <li className="nav-item">
              <a className="nav-link" href="/">Cactus</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Suculentas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Catálogo</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar