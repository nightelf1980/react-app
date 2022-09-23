import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../ItemCart/ItemCart.css"

const ItemCart = ({ product }) => {
    const { cart,removeItem , addItem} = useCartContext()
    var subTotal = 0
    subTotal = product.quantity * product.price
    return (
        <tr>
            <td className="align-middle text-center img-cart"><Link to={"/pages/catalogo/" + product.id}><img src={"../../img/products/" + product.image} width="100px" alt={product.title} title={product.title}/></Link></td>
            <td className="align-middle text-center">{product.title}</td>
            <td className="align-middle text-center"><button className='btn m-2'><img src="/img/decrease.png" width="15" title="Agregar" /></button>{product.quantity}<button className='btn m-2'><img src="/img/increase.png" width="15" title="Agregar" /></button></td>
            <td className="align-middle text-center">$ {product.price}</td>
            <td className="align-middle text-center">$ {subTotal}</td>
            <td class="align-middle text-center" width="50"><Link to="#!" className="btn" title="Quitar del carro"><i class="fa-solid fa-trash"></i></Link></td>
        </tr>
    )
}

export default ItemCart