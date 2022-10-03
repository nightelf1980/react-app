import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
// import { productos } from "../../Database/Productos";
import ItemDetail from "../ItemDetail/ItemDetail";

// export const ItemDetailContainer = () => {
//     const [items, setItem] = useState([])
//     const [loading, setLoading] = useState(true)
//     const {detalleId} = useParams();

//     const getProductos = () => {
//         return new Promise ((response, reject) => {
            
//             setTimeout(() => {
//                 const producto = productos.find(item=>item.id === parseInt(detalleId));
//                 response(producto)
//     }, 555)

// })}
//                 getProductos()
//                 .then((info) => {
//                     setItem(info)
//                 })
//                 .catch((error) => {
//                     console.log(error)
//                 })
//                 .finally(() => setLoading(false))

    export const ItemDetailContainer = () => {
        const [items, setItems] = useState({});
        const {detalleId} = useParams();
    
        useEffect(() => {
            const querydb = getFirestore();
            const queryDoc = doc(querydb, 'items', detalleId);
            getDoc(queryDoc)
            .then(res => setItems({id: res.id, ...res.data()}))
        }, [detalleId])

    return (
        // loading ? 
        // <div className="col-md-12 text-center">
        //     <div className="spinner-border text-success" role="status">
        //         <span className="visually-hidden"></span>
        //     </div>
        // </div>

        // :
        <>
            <ItemDetail items={items}/>
        </>
    )
}

export default ItemDetailContainer