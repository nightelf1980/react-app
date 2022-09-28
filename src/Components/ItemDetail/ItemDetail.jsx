import React , {useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import '../ItemDetail/ItemDetail.css'

export const ItemDetail = ({items}) => {
    let numeroPrecio = parseFloat(items.price);
    let qStock = "";
    if (items.stock > 0) {
        qStock = "Stock disponible"
    } else {
        qStock = "Sin stock";
    }

    const [cart, setCart] = useState(false)
    const {addItem} = useCartContext()

    const onAdd = (quantity) => {
        setCart(true)
        addItem(items, quantity)
    }

    const fav = () => {
        let contenido = `<i className="fa-solid fa-heart fa-lg"></i>`
        document.getElementById("fav").innerHTML = contenido
    }

    return (
        <div className="row col-md-10 offset-md-1">
            <div className="card">
                <div className="row">
                    <div className="col-md-4 col-sm-4 p-5">
                        <img src={"http://drive.google.com/uc?export=view&id=" + items.image} className="card-img-top" alt={items.title} title={items.title}/>
                    </div>
                    <div className="col-md-8 col-sm-8 p-4">
                        <div className="card-body row d-flex">
                            <div className="col-md-11">
                                <h2 className="card-title col-md-11">{items.title}</h2>
                            </div>
                            <div className="col-md-1 text-center text-primary" id="fav">
                                <i className="fa-regular fa-heart fa-lg" onClick={() => fav()} />
                            </div>
                            <h5 className="card-text fw-bold">Precio: ${items.price}</h5>
                            <p className="text-success"><b>Llévalo en 6 cuotas de $ {(numeroPrecio /6).toFixed(0)} sin interés</b></p>
                        </div>
                        <div>
                            {
                                cart
                                ? <div>
                                    <ItemCount initial={1} stock ={items.stock} onAdd={onAdd}/>
                                    <Link to="/pages/cart">
                                        <div className="card-body text-center">
                                            <button className='btn btn-success'>Finalizar Compra</button>
                                        </div>
                                    </Link>
                                </div>
                                : <ItemCount initial={1} stock ={items.stock} onAdd={onAdd}/>
                            }
                            <p className="text-end fw-bold">{qStock}</p>
                            <p className="text-end text-muted">({items.stock} unidades disponibles)</p>
                        </div>
                        <div className="card-body">
                            <h4>Descripción</h4>
                            <p className="card-text">{items.description}</p>
                        </div>
                        <div className="card-body row col-md-12">
                            <div className="col-md-6 offset-md-3 text-center">
                                <button className='btn btn-secondary button-back'><Link to="/pages/catalogo">Volver al catálogo</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail