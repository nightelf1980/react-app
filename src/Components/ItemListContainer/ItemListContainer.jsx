import React , { useEffect , useState } from "react";
import { useParams } from 'react-router-dom';
import { productos } from "../../Database/Productos";
import ItemList from "../ItemList/ItemList"

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
/*     const [loading, setLoading] = useState(true) */
    const {categoriaId} = useParams();
    useEffect(() => {
        const getProductos = new Promise(response => {
            setTimeout(() => {
                response(productos);
            }, 200);
        });
        if (categoriaId) {
            getProductos.then(res => setItems(res.filter(producto => producto.category === parseInt(categoriaId))));
            console.log("Filtrando categoría: " + categoriaId)
        } else {
            getProductos.then(res => setItems(res));
            console.log("Sin filtrar, arreglo completo")
        }


    }, [categoriaId]);
   
    return (
/*         loading ? 
        <div className="col-md-12 text-center">
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden"></span>
            </div>
        </div>

        :
 */
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer

/* getProductos()
.then((data) => {
    setItems(data);
})
.catch((error) => {
    console.log(error);
})
.finally(() => setLoading(false)) */