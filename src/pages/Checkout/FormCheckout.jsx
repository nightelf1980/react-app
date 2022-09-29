import React from "react";

const FormCheckout = () => {
    return (
        <form className="container py-3">
            <h2 className="text-center">Datos de contacto y dirección de despacho</h2>
            <div className="row">
                <div className="form-group col-md-4">
                <label for="inputName">Nombres</label>
                    <input type="text" className="form-control" placeholder="Nombres" aria-label="First name" />
                </div>
                <div className="form-group col-md-4">
                <label for="inputlastName">Apellidos</label>
                    <input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name" />
                </div>
                <div className="form-group col-md-4">
                    <label for="inputEmail4">Correo electrónico</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Correo electrónico" />
                </div>
            </div>
            <div className="form-group">
                <label for="inputAddress">Dirección</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Dirección" />
            </div>
            <div className="form-group">
                <label for="inputAddress2">Departamento/Block/Piso</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Departamento, Block, Piso" />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">Ciudad</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="Ciudad"/>
                </div>
                <div className="form-group col-md-6">
                    <label for="inputState">Región</label>
                    <select id="inputState" className="form-control">
                        <option selected>Elije una Región</option>
                        <option>Arica y Parinacota</option>
                        <option>Tarapacá</option>
                        <option>Antofagasta</option>
                        <option>Atacama</option>
                        <option>Coquimbo</option>
                        <option>Valparaíso</option>
                        <option>O'Higgins</option>
                        <option>Maule</option>
                        <option>Biobío</option>
                        <option>La Araucanía</option>
                        <option>de los Ríos</option>
                        <option>de Los Lagos</option>
                        <option>Aysén</option>
                        <option>Magallanes</option>
                        <option>Metropolitana</option>
                    </select>
                </div>
            </div>
            <div className="form row">
                <div className="form-group col-md-2">
                    <label for="inputZip">Código Postal</label>
                    <input type="text" className="form-control" id="inputZip" placeholder="Código Postal"/>
                </div>
            </div>
        </form>
    )
}

export default FormCheckout