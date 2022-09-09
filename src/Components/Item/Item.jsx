import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({titulo, descripcion, imagen, precio}) => {

    const onAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} unidades`);
}

    return (
        <div className="card">
            <div className="card-body">
                <img src={"../../img/" + imagen} className="card-img-top" alt={titulo} title={titulo}/>
                <h5 className="card-title text-center py-1">{titulo}</h5>
                <p className="card-title text-center">{precio}</p>
                <ItemCount initial={1} stock ={5} onAdd = {onAdd}/>
            </div>
        </div>
    )
}

export default Item;