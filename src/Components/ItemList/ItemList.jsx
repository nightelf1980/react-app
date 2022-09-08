import React from "react";
import Item from "../Item/Item";

const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map(item => (
                <div key={item.id} className="col-md-4">
                    <Item titulo={item.titulo} precio={"Precio unidad: $ " + item.precio} imagen={item.imagen}/>
                </div>)
            )}
        </div>
    )
}

export default ItemList;