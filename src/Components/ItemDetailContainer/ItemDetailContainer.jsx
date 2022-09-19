import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { productos } from "../../Database/Productos";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
    const [items, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const {detalleId} = useParams();

    const getProductos = () => {
        return new Promise ((response, reject) => {
            
            setTimeout(() => {
                const producto = productos.find(item=>item.id === parseInt(detalleId));
                response(producto)
    }, 200)


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
        const getProductos = async() =>{
            const detalleId = await getProductos();
            setItem(detalleId)

        }
        getProductos();
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
{/*             <ItemDetail id={items.id} titulo={items.title} descripcion={items.description} imagen={items.image} max={items.stock} precio={items.price}/> */}
            <ItemDetail items={items}/>
        </div>
    )
}

export default ItemDetailContainer