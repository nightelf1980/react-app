import React from "react";
import { Link } from "react-router-dom";
import "../ItemCart/ItemCart.css"

const ItemCart = ({ product }) => {
    var subTotal = 0
    subTotal = product.quantity * product.price
    return (
        <tr>
            <td className="align-middle text-center img-cart"><Link to={"/pages/catalogo/" + product.id}><img src={"http://drive.google.com/uc?export=view&id=" + product.image} width="40px" alt={product.title} title={product.title}/></Link></td>
            <td className="align-middle text-center">{product.title}</td>
            <td className="align-middle text-center">{product.quantity}</td>
            <td className="align-middle text-center">$ {product.price}</td>
        </tr>
    )
}

export default ItemCart