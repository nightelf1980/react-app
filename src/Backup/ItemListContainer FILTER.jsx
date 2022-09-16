import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { productos } from "../../Database/Productos";
import ItemList from "../ItemList/ItemList"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";


const ItemListsContainer = () => {
    const [items, setItems] = useState([]);
    const {category} = useParams ();

    useEffect(() => {
        
        const getProductos = () => 
            new Promise((response, reject) => {
                getProductos.then(response => setItems(response.filter(producto => producto.category === category)))
                setTimeout(() => {
                response(productos);
                }, 2000);
        });
        console.log("Entré al useEffect");

        
    }, [category]);
   
    return (
        <div className="container">
            {console.log("Return")}
            <ItemDetailContainer />
            <ItemList items={items} />
            
        </div>
    )
}

export default ItemListsContainer