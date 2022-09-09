import React from "react";
import Item from "../Item/Item";

const ItemList = ({items}) => {
    return (
        <div className="row">
            {items.map(item => (
                <div key={item.id} className="col-md-3 py-3">
                    <Item titulo={item.title} precio={<b>{"Precio: $ " + item.price}</b>} imagen={item.image}/>
                </div>)
            )}
        </div>
    )
}

export default ItemList;