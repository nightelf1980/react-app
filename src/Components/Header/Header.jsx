import React from "react";
import CartWidget from "./CartWidget/CartWidget";
import Navbar from "./Navbar/Navbar";

function Header() {
    return (
        <div className="container-fluid row d-flex bg-light">
          <Navbar />
          <CartWidget />
        </div>
    );
}
  
export default Header;