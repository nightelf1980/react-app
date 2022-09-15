import React from "react";
import ItemListsContainer from "../../Components/ItemListContainer/ItemListContainer";

const Catalogo = () => {
    return (
        <div className='container'>
            <div id='catalogo'>
                <div className="row d-flex justify-content-center">
                <ItemListsContainer />
            </div>
        </div>
      </div>
    )
}

export default Catalogo