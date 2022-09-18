import React , {useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import '../ItemDetail/ItemDetail.css'

const ItemDetail = ({id, titulo, descripcion, imagen, max, precio}) => {
    let numeroPrecio = parseFloat(precio);
    let qStock = "";
    if (max > 0) {
        qStock = "Stock disponible"
    } else {
        qStock = "Sin stock";
    }

    const [Cart, setCart] = useState(false)
    const {addProduct} = useCartContext()

    const onAdd = (quantity) => {
        setCart(true)
        addProduct(id, quantity)
    }

    const fav = () => {
        let contenido = `<i class="fa-solid fa-heart fa-lg"></i>`
        document.getElementById("fav").innerHTML = contenido
    }

    return (
        <div className="row col-md-10 offset-md-1">
            <div className="card">
                <div className="row">
                    <div className="col-md-5 p-5">
                        <img src={"../../img/products/" + imagen} className="card-img-top" alt={titulo} title={titulo}/>
                    </div>
                    <div className="col-md-7 p-4">
                        <div className="card-body row d-flex">
                            <div className="col-md-11">
                                <h2 className="card-title col-md-11">{titulo}</h2>
                            </div>
                            <div className="col-md-1 text-center text-primary" id="fav">
                                <i className="fa-regular fa-heart fa-lg" onClick={() => fav()} />
                            </div>
                            <h5 className="card-text fw-bold">Precio: ${precio}</h5>
                            <p className="text-success"><b>Llévalo en 6 cuotas de $ {(numeroPrecio /6).toFixed(0)} sin interés</b></p>
                        </div>
                        <div>
                            {
                                Cart
                                ? <div>
                                <ItemCount initial={1} stock ={max} onAdd={onAdd}/>
                                    <Link to="/pages/cart">
                                    <div className="card-body text-center">
                                        <button className='btn btn-success'>Finalizar Compra</button>
                                    </div>
                                </Link>
                                </div>
                                : <ItemCount initial={1} stock ={max} onAdd={onAdd}/>
                            }
                            <p className="text-end fw-bold">{qStock}</p>
                            <p className="text-end text-muted">({max} unidades disponibles)</p>
                        </div>
                        <div className="card-body">
                            <h4>Descripción</h4>
                            <p className="card-text">{descripcion}</p>
                        </div>
                        <div className="card-body row col-md-12">
                            <div className="col-md-5 offset-md-1 text-center">
                                <button className='btn btn-secondary button-back'><a href="/pages/catalogo">Volver al catálogo</a></button>
                            </div>
                            <div className="col-md-5 offset-md-1 text-center">
                                <button className='btn btn-warning button-back'><a href={id + 1} >Siguiente producto</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail