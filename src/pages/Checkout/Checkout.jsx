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

                    <div className="py-3">
                        <FormCheckout />
                    </div>
                </>
            }
        </>
    )
}

export default Checkout

