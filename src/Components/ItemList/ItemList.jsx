import React from "react";
import Item from "../Item/Item";

const ItemList = ({items = []}) => {
    return (
        <div className="row">
            {items.map(item => (
                <div className="col-md-3 py-3" key={item.id}>
{/*                     <Item id={item.id} titulo={item.title} descripcion={item.description} precio={"Precio: $ " + item.price} imagen={item.image} categoria={item.category}/> */}
                    <Item items={item}/>
                </div>)
            )}
        </div>
    )
}

export default ItemList;