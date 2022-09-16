import React from "react";
import { Link } from 'react-router-dom';
/* import { productos } from "../../Database/Productos";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"; */
const Item = ({id, titulo, descripcion, imagen, max, precio}) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={"../../img/products/" + imagen} className="card-img-top" alt={titulo} title={titulo}/>
                <h5 className="card-title text-center py-1">{titulo}</h5>
                <h5 className="card-title text-center py-1">Producto ID: {id}</h5>
                <h5 className="card-title text-center py-1">Stock: {max}</h5>
                <p className="card-title text-center text-muted">{precio}</p>
                <div className='py-2 text-center'>
                <Link to={"/pages/catalogo/" + id}><button className='btn btn-success'>Ver más</button> </Link>
            </div>
            </div>
        </div>
    )
}

export default Item;