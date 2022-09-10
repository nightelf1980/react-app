import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList"
import { productos } from "../../Database/Productos";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListsContainer = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const getProductos = () => 
            new Promise((response, reject) => {
                setTimeout(() => {
                response(productos);
                }, 2000);
            /* let contenido = `<div class="text-center"><div class="spinner-border text-center" role="status"><span class="visually-hidden">Loading...</span></div></div>`;
            document.getElementById("catalogo").innerHTML = contenido;
            console.log("Carga spinner") */
        });

        getProductos()
            .then((data) => {
                setItems(data);
                console.log("2 segundos, carga respuesta y productos")
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    console.log(items)
   
    return (
        <div className="container">
            <ItemDetailContainer />
            <ItemList items={items} />
            
        </div>
    )
}

export default ItemListsContainer