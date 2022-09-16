import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList"
import { productos } from "../../Database/Productos";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useParams } from 'react-router-dom';

const ItemListsContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams ();

    useEffect(() => {
        
        const getProductos = () => 
            new Promise((response, reject) => {
                setTimeout(() => {
                response(productos);
                }, 2000);
        });

            getProductos()
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            })

    }, []);
   
    return (
        <div className="container">
            <ItemDetailContainer />
            <ItemList items={items} />
            
        </div>
    )
}

export default ItemListsContainer