import React from "react";
import ItemCartCheckout from "../../Components/ItemCartCheckout/ItemCartCheckout";
import { useCartContext } from "../../context/CartContext"

const Checkout = () => {

    const {cart, totalPrice, totalProducts} = useCartContext()

    return (
        <>
            {
                <div className="container d-flex">
                    <div className="col-md-8 text-center">
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
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-3 text-center">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Resumen de tu compra</th>
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
                                <tr className="alert alert-success" role="alert">
                                    <td>Total a pagar</td>
                                    <td><b>$ {(totalPrice() * 1.19).toFixed(0)}</b></td>
                                </tr>
                                <tr className="alert" role="alert">
                                    <td colSpan={2}><button type="button" className="btn btn-success"><a className="boton" href="https://www.webpay.cl">Pagar</a></button></td>
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

