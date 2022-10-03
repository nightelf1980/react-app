import React from "react";
import Item from "../Item/Item";

const ItemList = ({items = []}) => {
    return (
        <div className="row">
            {items.map(item => (
                <div className="col-md-3 py-3" key={item.id}>
                    <Item items={item}/>
                </div>)
            )}
        </div>
    )
}

export default ItemList;