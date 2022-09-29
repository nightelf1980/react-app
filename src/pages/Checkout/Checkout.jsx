import React from "react";
import ItemCartCheckout from "../../Components/ItemCartCheckout/ItemCartCheckout";
import { useCartContext } from "../../context/CartContext"
import FormCheckout from "../Checkout/FormCheckout"
import Summary from "./Summary";

const Checkout = () => {

    const {cart} = useCartContext()

    return (
        <>
            {
                <>
                <div className="container">
                    <div className="py-3">
                        <FormCheckout />
                    </div>
                    <div className="row text-center py-3">
                        <h2>Resumen de Productos</h2>
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
                </div >

                    <Summary />

                <div className="container text-center py-5">
                    <button type="button" className="btn btn-success"><a className="boton" href="https://www.webpay.cl">Continuar</a></button>
                </div>

                </>
            }
        </>
    )
}

export default Checkout

