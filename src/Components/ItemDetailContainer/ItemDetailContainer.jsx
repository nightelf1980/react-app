import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { productos } from "../../Database/Productos";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const [items, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProductos = () =>
            new Promise ((response, reject) => {
                const itemDetail = productos.find((pr) => pr.id === 3)
                setTimeout(() => {
                    response(itemDetail)
                }, 2000)
            })
            getProductos()
                .then((info) => {
                    setItem(info)
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => setLoading(false))
    }, [])

    return (
        loading ? 
        <div className="col-md-12 text-center">
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>


        :
        <div>
            <ItemDetail titulo={items.title} descripcion={items.description} precio={items.price} imagen={items.image} max={items.stock}/>
        </div>
        
    )
}

export default ItemDetailContainer