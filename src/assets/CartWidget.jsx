import React from "react";

const CartWidget = () => {
    return (
        <div className="col-md-1 d-flex align-items-center">
            <a href="/" id="boton_carrito" title="Ir al carro">
                <button type="button" className="btn btn-success position-relative">
                <i class="fa-solid fa-cart-shopping" />
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
                </button>
            </a>
        </div>
    )
}

export default CartWidget