import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { productos } from "../../Database/Productos";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [items, setItem] = useState([])

    useEffect(() => {
        const getProductos = () =>
            new Promise ((response, reject) => {
                const itemDetail = productos.find((pr) => pr.id === 3)
                setTimeout(() => {
                    response(itemDetail)
                }, 0)
            })
            getProductos()
                .then((info) => {
                    setItem(info)
                })
                .catch((error) => {
                    console.log(error)
                })
    }, [])

    return (
        <div>
            <ItemDetail titulo={items.title} descripcion={items.description} precio={items.price} imagen={items.image} max={items.stock}/>
        </div>
        
    )
}

export default ItemDetailContainer