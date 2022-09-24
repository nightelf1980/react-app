import React from "react";
import ItemCartCheckout from "../../Components/ItemCartCheckout/ItemCartCheckout";
import { useCartContext } from "../../context/CartContext"

const Checkout = () => {

    const {cart, totalPrice, totalProducts} = useCartContext()

    return (
        <>
            {
                <div className="row">
                    <div className="container col-md-8 text-center">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" colSpan={2}>Descripción</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                </tr>
                            </thead>
                            <tbody>

                                {cart.map(product => <ItemCartCheckout key={product.id} product={product} />)}
                                    
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4 text-center">
                    <table className="table">
                        <thead>
                            <tr>
                                <th colSpan={2}>Resumen de tu compra</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cantidad de productos</td>
                                <td>{totalProducts()}</td>
                            </tr>
                            <tr>
                                <td>Total a pagar</td>
                                <td>$ {totalPrice()}</td>
                            </tr>
                            <tr>
                                <td colSpan={2}><button type="button" className="btn btn-success"><a className="btn btn-success" href="https://www.webpay.cl">Pagar</a></button></td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>


            }
        </>
    )
}

export default Checkout

