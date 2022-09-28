/* import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../ItemCart/ItemCart.css"

const ItemCart = ({ product }) => {
    const { removeItem ,addItem, deteleItem} = useCartContext()
    var subTotal = 0
    subTotal = product.quantity * product.price
    return (
        <tr>
            <td className="align-middle text-center img-cart"><Link to={"/pages/catalogo/" + product.id}><img src={"../../img/products/" + product.image} width="100px" alt={product.title} title={product.title}/></Link></td>
            <td className="align-middle text-center">{product.title}</td>
            <td className="align-middle text-center"><button className='btn m-2' onClick={removeItem}><img src="/img/decrease.png" width="15" title="Disminuir" alt="Disminuir"></img></button>{product.quantity}<button className='btn m-2' onClick={addItem}><img src="/img/increase.png" width="15" title="Agregar"alt="Agregar"/></button></td>
            <td className="align-middle text-center">$ {product.price}</td>
            <td className="align-middle text-center">$ {subTotal}</td>
            <td className="align-middle text-center" width="50"><Link onClick={deteleItem} className="btn" title="Quitar del carro"><i className="fa-solid fa-trash"></i></Link></td>
        </tr>
    )
}

export default ItemCart */

import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../ItemCart/ItemCart.css"
import CartCounter from "../../pages/Cart/CartCounter"

const ItemCart = ({ product }) => {
    const { deteleItem} = useCartContext()
    var subTotal = 0
    subTotal = product.quantity * product.price

    return (
        <tr>
            <td className="align-middle text-center img-cart"><Link to={"/pages/catalogo/" + product.id}><img src={"../../img/products/" + product.image} width="100px" alt={product.title} title={product.title}/></Link></td>
            <td className="align-middle text-center">{product.title}</td>
                <CartCounter inicialValue={product.quantity} product={product} />
            <td className="align-middle text-center">$ {product.price}</td>
            <td className="align-middle text-center">$ {subTotal}</td>
            <td className="align-middle text-center" width="50"><Link onClick={deteleItem} className="btn" title="Quitar del carro"><i className="fa-solid fa-trash"></i></Link></td>
        </tr>
    )
}

export default ItemCart