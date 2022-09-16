import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { productos } from "../../Database/Productos";
import ItemDetail from "../ItemDetail/ItemDetail";
import Item from "../Item/Item";


const ItemDetailContainer = () => {
    const [items, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const {detalleId} = useParams();

        const getProductos = (id) => {
            return new Promise ((response, reject) => {
                
                setTimeout(() => {
                    const producto = productos.find(items=>items.id === parseInt(detalleId));
                    response(producto)
                    console.log(producto);
        }, 2000)


})}
                getProductos()
                .then((info) => {
                    setItem(info)
                })
                .catch((error) => {
                    console.log(error)
                })
                .finally(() => setLoading(false))


    useEffect(() => {
        const getProducto = async() =>{
            const detalle = await getProductos();
            setItem(detalle)

        }
        getProducto();
    },[detalleId])


    return (
        loading ? 
        <div className="col-md-12 text-center">
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>

        :

        <div>
            <ItemDetail id={items.id} titulo={items.title} descripcion={items.description} imagen={items.image} max={items.stock} precio={items.price}/>
        </div>
    )
}

export default ItemDetailContainer