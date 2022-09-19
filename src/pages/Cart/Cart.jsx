import React from "react";

const Cart = () => {
    return (
        <div className="container text-center">
            <h2>Carro de compras</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Cart