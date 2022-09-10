import React from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({titulo, descripcion, imagen, max, precio}) => {
    return (
        <div className="row">
            <div className="card">
            <h3>ItemDetail</h3>
                <div className="row">
                    
                    <div className="col-md-4 p-5">
                        <img src={"../../img/products/" + imagen} className="card-img-top" alt={titulo} title={titulo}/>
                    </div>
                    <div className="col-md-8 p-5">
                    <div className="card-body">
                        <h3 className="card-title">{titulo}</h3>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text text-muted">{precio}</p>
                    <ItemCount initial={1} stock ={max}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail