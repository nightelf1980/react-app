import React from "react";
import { useState } from "react";
import { orderId } from "./FormCheckout"

const OrderId = () => {
    const [orderId, setOrderId] = useState('')
        return (
            <div className="text-center">
                <h1>Gracias por su compra</h1>
                <h3>El número de seguimiento es el: {orderId}</h3>
            </div>
        )
}

export default OrderId