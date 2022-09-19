import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'


const Footer = () => {
    return (
    <div className="text-center text-lg-start text-dark mt-5 footer">
        <div className="container pb-0">
            <div>
                <div className="row">
                    {/* COLUMNA */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Jardinería Artemis</h6>
                        <p>Decora tus espacios con plantas de interior, exterior, cactus y suculentas. Dale vida a tu hogar.</p>
                    </div>
                    {/* COLUMNA */}
                    <hr className="w-100 clearfix d-md-none"/>
                    {/* COLUMNA */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Productos a la venta</h6>
                        <p><Link className="text-dark" href="/pages/catalogo">Catálogo de productos</Link></p>
                    </div>
                    {/* COLUMNA */}
                    <hr className="w-100 clearfix d-md-none" />
                    {/* COLUMNA */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Links a otros sitios de interés</h6>
                        <p><Link className="text-dark" href="https://www.consultaplantas.com" target="_blank" rel="noreferrer">Catálogo mundial de plantas</Link></p>
                        <p><Link className="text-dark" href="https://fundacionphilippi.cl/catalogo/" target="_blank" rel="noreferrer">Catálogo de plantas silvestres en Chile</Link></p>
                        <p><Link className="text-dark" href="https://www.nationalgeographicla.com/" target="_blank" rel="noreferrer">National Geographic</Link></p>
                    </div>
                    {/* COLUMNA */}
                    <hr className="w-100 clearfix d-md-none" />
                    {/* COLUMNA */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
                        <p><i className="fas fa-home mr-3 text-secondary"></i> Lampa, Santiago, Chile.</p>
                        <p><i className="fas fa-envelope mr-3 text-orange"></i> jardineriaartemis@gmail.com</p>
                        <p><i className="fas fa-phone mr-3 text-primary"></i> +569 8243 3747 | +569 9774 8104</p>
                        <i className="fa-solid fa-seedling text-success"></i><i className="fa-solid fa-hashtag animate__animated animate__bounceInRight m-2 text-success">Plantlover</i>
                    </div>
                </div>
            </div>
            <hr className="my-3" />
            {/* COPYRIGHT SECTION */}
            <div className="p-3 pt-0">
                <div className="row d-flex align-items-center">
                    {/* COLUMNA */}
                    <div className="col-md-7 col-lg-8 text-center text-md-start">
                        {/* COPYRIGHT */}
                        <div className="p-3">© 2022 Copyright: <Link href="" className="text-dark">Jardinería Artemis</Link></div>
                    </div>
                    {/* SOCIAL NETWORKS COLUMN */}
                    <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                        <p>Síguenos en Redes Sociales</p>
                        {/* FACEBOOK */}
                        <Link className="btn btn-floating m-1 text-primary" role="button" href="/"><i className="fab fa-facebook"></i></Link>
                        {/* WHATSAPP */}
                        <Link className="btn btn-floating m-1 text-success" role="button" href="https://api.whatsapp.com/send?phone=56982433747&text=Hola%2C%20quisiera%20m%C3%A1s%20informaci%C3%B3n." target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></Link>
                        {/* INSTAGRAM */}
                        <Link className="btn btn-floating m-1 text-danger" role="button" href="https://www.instagram.com/jardineria_artemis/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Footer