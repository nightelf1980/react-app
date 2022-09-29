import React from "react";
import { useCartContext } from "../../context/CartContext"

const Summary = () => {
    const {totalPrice, totalProducts} = useCartContext()
    return (
        <div className="container .col-md-4 .offset-md-4 text-center py-3">
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan={2}><h2>Resumen de la compra</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="alert" role="alert">
                        <td>Cantidad de productos</td>
                        <td><b>{totalProducts()}</b></td>
                    </tr>
                    <tr className="alert" role="alert">
                        <td>Total</td>
                        <td><b>$ {(totalPrice()).toFixed(0)}</b></td>
                    </tr>
                    <tr className="alert" role="alert">
                        <td>IVA 19%</td>
                        <td><b>$ {(totalPrice() * 0.19).toFixed(0)}</b></td>
                    </tr>
                    <tr className="alert" role="alert">
                        <td>Despacho</td>
                        <td><b>$ 3900</b></td>
                    </tr>
                    <tr className="alert alert-success" role="alert">
                        <td>Total a pagar</td>
                        <td><b>$ {((totalPrice() * 1.19) + 3900).toFixed(0)}</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Summary