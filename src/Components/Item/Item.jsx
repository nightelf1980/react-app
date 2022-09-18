import React from "react";
import { Link } from 'react-router-dom';
import "../Item/Item.css"
const Item = ({id, titulo, descripcion, imagen, max, precio, categoria}) => {
    return (
        
        <div className="card hover-card shadow-sm">
                <div className="card-body hover-card-body">
                <Link to={"/pages/catalogo/" + id}><img src={"../../img/products/" + imagen} className="card-img-top" alt={titulo} title={titulo}/></Link>
                    <h5 className="card-title text-center py-1">{titulo}</h5>
                    <p className="card-title text-center text-muted">{precio}</p>
                </div>
            
        </div>
    )
}

export default Item;