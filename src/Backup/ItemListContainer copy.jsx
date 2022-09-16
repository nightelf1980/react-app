import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { productos } from "../../Database/Productos";
import ItemList from "../ItemList/ItemList"

const ItemListsContainer = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams();

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
            .finally(() => setLoading(false))

    }, []);
   
    return (
        loading ? 
        <div className="col-md-12 text-center">
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>

        :

        <div className="container">
            <ItemList items={items} />
            
        </div>
    )
}

export default ItemListsContainer