import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../ItemCart/ItemCart.css"
import CartCounter from "../../pages/Cart/CartCounter"

const ItemCart = ({ product }) => {
    const { removeItem } = useCartContext()
    var subTotal = 0
    subTotal = product.quantity * product.price

    return (
        <tr>
            <td className="align-middle text-center img-cart"><Link to={"/pages/catalogo/" + product.id}><img src={"http://drive.google.com/uc?export=view&id=" + product.image} width="100px" alt={product.title} title={product.title}/></Link></td>
            <td className="align-middle text-center">{product.title}</td>
                <CartCounter inicialValue={product.quantity} product={product} maxStock={product.stock}/>
            <td className="align-middle text-center">$ {product.price}</td>
            <td className="align-middle text-center">$ {subTotal}</td>
            <td className="align-middle text-center" width="50"><Link onClick={() => removeItem(product.id)} className="btn" title="Quitar del carro"><i className="fa-solid fa-trash"></i></Link></td>
        </tr>
    )
}

export default ItemCart