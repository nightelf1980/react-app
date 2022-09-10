import React from "react";

const Item = ({titulo, descripcion, imagen, precio}) => {
    return (
        <div className="card">
            <div className="card-body">
                <img src={"../../img/products/" + imagen} className="card-img-top" alt={titulo} title={titulo}/>
                <h5 className="card-title text-center py-1">{titulo}</h5>
                <p className="card-title text-center text-muted">{precio}</p>
                <div className='py-2 text-center'>
                <button className='btn btn-success'>Ver más</button>
            </div>
            </div>
        </div>
    )
}

export default Item;