import React from "react";
import { Link } from "react-router-dom";
import '../NotFound/NotFound.css'

const NotFound = () => {
    return (
        <div id="notfound">
            <div class="notfound">
                <div class="notfound-404">
                    <h1>UPS!</h1>
                </div>
                <h2>404 - Página no encontrada</h2>
                <p>La página que estás buscando ha sido removida o está temporalmente no disponible.</p>
                <hr />
                <Link to="/"><button className='btn btn-success'><i class="fa-solid fa-house"></i> Ir al Home</button></Link>
            </div>
        </div>
    )
}

export default NotFound