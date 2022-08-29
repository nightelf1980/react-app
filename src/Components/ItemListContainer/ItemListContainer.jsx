import React from "react";

const ItemListsContainer = (props) => {
    return (
        <div className="col-md-4 py-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center py-1">{props.valor}</h5>
                </div>
            </div>
        </div>
    )
}

export default ItemListsContainer