import React , { useEffect , useState } from "react";
import { useParams } from 'react-router-dom';
import { productos } from "../../Database/Productos";
import CategoryNavbar from "../Header/CategoryNavbar/CategoryNavbar";
import ItemList from "../ItemList/ItemList"

export const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoriaId} = useParams();
    useEffect(() => {
        const getProductos = new Promise(response => {
            setTimeout(() => {
                response(productos);
            }, 0);
        });
        if (categoriaId) {
            getProductos.then(res => setItems(res.filter(producto => producto.category === parseInt(categoriaId))));
        } else {
            getProductos.then(res => setItems(res));
        }

    }, [categoriaId]);
   
    return (
        <div className="container">
            <h2 className="text-center">Catálogo de productos</h2>
            <div>
                <CategoryNavbar />
            </div>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer