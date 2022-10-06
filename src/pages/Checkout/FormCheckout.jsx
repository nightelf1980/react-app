import React, {useState} from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useCartContext } from "../../context/CartContext"
import {db} from "../../Firebase/firebaseConfig"
import { Link } from "react-router-dom";

const FormCheckout = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [adress1, setAdress1] = useState('')
    const [adress2, setAdress2] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipcode, setZipcode] = useState('')
    const {cart, totalPrice, clearCart} = useCartContext()
    const total = (totalPrice()*1.19).toFixed(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        const order = {
            buyer: {firstname, lastname, phone, email, adress1, adress2, city, state, zipcode},
            date: serverTimestamp(),
            cart,
            total
        }

        clearCart()

        const refOrder = collection(db, 'orders')
        addDoc(refOrder, order).then((res) => {
            console.log(res.id);
            const orderId = res.id
            }
        )
    }

    const handleFirstName = (e) => setFirstName(e.target.value)
    const handleLastName = (e) => setLastName(e.target.value)
    const handlePhone = (e) => setPhone(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handleAdress1 = (e) => setAdress1(e.target.value)
    const handleAdress2 = (e) => setAdress2(e.target.value)
    const handleCity = (e) => setCity(e.target.value)
    const handleState = (e) => setState(e.target.value)
    const handleZipcode = (e) => setZipcode(e.target.value)

    return (
        <form action="" onSubmit={handleSubmit} className="container py-3">
            <h2 className="text-center">Datos de contacto y dirección de despacho</h2>
            <div className="row">
                <div className="form-group col-md-6">
                <label htmlFor="inputName">Nombres</label>
                    <input type="text" className="form-control" placeholder="Nombres" aria-label="First name" value={firstname} onChange={handleFirstName}/>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="inputlastName">Apellidos</label>
                    <input type="text" className="form-control" placeholder="Apellidos" aria-label="Last name" value={lastname} onChange={handleLastName}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="phone">Número de teléfono</label>
                    <input type="phone" className="form-control" id="phone" placeholder="981234567" value={phone} onChange={handlePhone}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="Correo electrónico" value={email} onChange={handleEmail}/>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress">Dirección</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Dirección" value={adress1} onChange={handleAdress1}/>
            </div>
            <div className="form-group">
                <label htmlFor="inputAddress2">Departamento/Block/Piso</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Departamento, Block, Piso" value={adress2} onChange={handleAdress2}/>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">Ciudad</label>
                    <input type="text" className="form-control" id="inputCity" placeholder="Ciudad" value={city} onChange={handleCity}/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputState">Región</label>
                    <select id="inputState" className="form-control" value={state} onChange={handleState}>
                        <option defaultValue>Elije una Región</option>
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
                    <label htmlFor="inputZip">Código Postal</label>
                    <input type="text" className="form-control" id="inputZip" placeholder="Código Postal" value={zipcode} onChange={handleZipcode}/>
                </div>
            </div>
            <div className="container text-center py-5">
                <button type="submit" className="btn btn-success" onClick={handleSubmit}><Link className="boton" to="/pages/cart/orderid">Enviar</Link></button>
            </div>
        </form>
    )
}

export default FormCheckout