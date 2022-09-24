import React from "react";
import { Link } from "react-router-dom";
import ItemCart from "../../Components/ItemCart/ItemCart";
import { useCartContext } from "../../context/CartContext"

const Cart = () => {
    const carroVacio = false;
    const {cart, totalPrice, clearCart} = useCartContext()
    if (cart.length === 0) {
        const carroVacio = true;
        console.log("Carro vacío: ", carroVacio)
        console.log(cart.length)
        return (
            <div className="container text-center">
                <h2>Carro de compras</h2>
                <p className="alert alert-warning text-center col-md-6 offset-md-3" role="alert">No hay productos seleccionados</p>
            </div>
        )
    }

    return (
        <>
            {
                <div className="container text-center">
                    <h2>Carro de compras</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={2}>Descripción</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cart.map(product => <ItemCart key={product.id} product={product} />)}
                                
                        </tbody>       
                        <tfoot>
                            <tr className="alert alert-secondary" role="alert">
                                <td className="text-center"colSpan={4}><b>Total</b></td>
                                <td className="text-center" ><b>$ {totalPrice()}</b></td>
                                <td className="text-center"></td>
                            </tr>
                            <tr className="alert" role="alert">
                                <td className="text-center" colSpan={4}><b>IVA (19%)</b></td>
                                <td className="text-center" ><b>$ {(totalPrice() * 0.19).toFixed(0)}</b></td>
                                <td className="text-center"></td>
                            </tr>
                            <tr className="alert alert-success" role="alert">
                                <td className="text-center" colSpan={4}><b>Total a pagar</b></td>
                                <td className="text-center" ><b>$ {(totalPrice() * 1.19).toFixed(0)}</b></td>
                                <td className="text-center"></td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="row">
                        <div className="col-md-8">
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-danger" onClick={clearCart}>Vaciar carro</button>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-shop-primary"><Link to="/pages/cart/checkout" className="btn btn-shop-primary">Finalizar Compra</Link></button>
                        </div>
                    </div>


                </div>
            }
        </>
    )
}

export default Cart