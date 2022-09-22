import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div className="col-md-1 d-flex align-items-center">
            <Link to="/pages/cart" title="Ir al carro">
                <button type="button" className="btn btn-success position-relative">
                <i className="fa-solid fa-cart-shopping" />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
                </button>
            </Link>
        </div>
    )
}

export default CartWidget