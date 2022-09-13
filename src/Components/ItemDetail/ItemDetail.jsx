import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({titulo, descripcion, imagen, max, precio}) => {
    let numeroPrecio = parseFloat(precio);
    let qStock = "";
    if (max > 0) {
        qStock = "Stock disponible"
    } else {
        qStock = "Sin stock";
    }
    return (
        <div className="row col-md-10 offset-md-1">
            <div className="card">
                <div className="row">
                    <div className="col-md-5 p-5">
                        <img src={"../../img/products/" + imagen} className="card-img-top" alt={titulo} title={titulo}/>
                    </div>
                    <div className="col-md-7 p-4">
                        <div className="card-body">
                            <h2 className="card-title">{titulo}</h2>
                            <h5 className="card-text fw-bold">Precio: ${precio}</h5>
                            <p className="text-success"><b>Llévatelo en 6 cuotas de $ {(numeroPrecio /6).toFixed(0)} sin interés</b></p>
                        </div>
                        <div>
                            <ItemCount initial={1} stock ={max}/>
                            <p className="text-end fw-bold">{qStock}</p>
                            <p className="text-end text-muted">({max} unidades disponibles)</p>
                        </div>
                        <div className="card-body">
                            <h4>Descripción</h4>
                            <p className="card-text">{descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail