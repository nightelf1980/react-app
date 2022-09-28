import React from "react";
import { Link } from 'react-router-dom';
import "../Item/Item.css"

    const Item = ({items}) => {
    return (
        
        <div className="card hover-card shadow-sm">
                <div className="card-body hover-card-body">
                        {/* <Link to={"/pages/catalogo/" + items.id}><img src={"../../img/products/" + items.image} className="card-img-top" alt={items.title} title={items.title}/></Link> */}
                        <Link to={"/pages/catalogo/" + items.id}><img src={"http://drive.google.com/uc?export=view&id=" + items.image} className="card-img-top" alt={items.title} title={items.title}/></Link>
                    <h5 className="card-title text-center py-1">{items.title}</h5>
                    <p className="card-title text-center text-muted">Precio: ${items.price}</p>
                </div>
        </div>
    )
}

export default Item;


