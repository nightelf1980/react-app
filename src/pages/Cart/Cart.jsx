import React from "react";

const Cart = () => {
    return (
        <div>
            <table>
            <tr class="alert" role="alert">
                <td>Resumen de tu compra: </td>
                <td>Total productos</td>
            </tr>
            <tr>
                <td class="text-end" colspan="2"><a href="https://www.webpay.cl" class="btn btn-primary"><i class="fa-solid fa-hand-holding-dollar "></i> Ir a pagar</a></td>
            </tr>
            </table>
        </div>
    )
}

export default Cart