import React from "react";
import ItemCount from "../ItemCount";

const ItemListsContainer = (props) => {
    
    const onAdd = (quantity) => {
            console.log(`Compraste ${quantity} unidades`);
    }
   
    return (


        <div className="col-md-4 py-3">
            <div className="card">
                <div className="card-body">
                <img src={"../../../../img/" + props.imagen} className="card-img-top" alt=""/>
                    <h5 className="card-title text-center py-1">{props.titulo}</h5>
                    <p className="card-title text-center">{props.precio}</p>
                    <ItemCount initial={1} stock ={5} onAdd = {onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemListsContainer