import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList"

const ItemListsContainer = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const productos = [
            {id:1, title:"Agave Attenuata", price:"4500", description:"", image:"agaveattenuata.jpg", category:1},
            {id:2, title:"Alegria Nueva Guinea", price:"3000", description:"", image:"alegrianuevaguinea.jpg", category:1},
            {id:3, title:"Aloe Vera", price:"2500", description:"", image:"aloevera.jpg", category:1},
            {id:4, title:"Anthurium Andreanum", price:"7500", description:"", image:"anthuriumandreanum.jpg", category:1},
            {id:5, title:"Anthurium Coriaceum", price:"4800", description:"", image:"anthuriumcoriaceum.jpg", category:1},
            {id:6, title:"Aralia Japonica", price:"4500", description:"", image:"araliajaponica.jpg", category:1},
            {id:7, title:"Aspidistra Variegada", price:"6500", description:"", image:"aspidistravariegada.jpg", category:1},
            {id:8, title:"Bacopa", price:"5000", description:"", image:"bacopa.jpg", category:1},
            {id:9, title:"Begonia", price:"5500", description:"", image:"begonia.jpg", category:1},
            {id:10, title:"Begonia Dragon Wing", price:"6500", description:"", image:"begoniadragonwing.jpg", category:1},
            {id:11, title:"Cactus Grusonii", price:"120000", description:"", image:"cactusgrusonii.jpg", category:1},
            {id:12, title:"Cactus injertado", price:"12000", description:"", image:"cactusinjertado.jpg", category:1},
            {id:13, title:"Cactus San Pedro", price:"8000", description:"", image:"cactussanpedro.jpg", category:1},
            {id:14, title:"Caladium Rojo", price:"18000", description:"", image:"caladiumrojo.jpg", category:1},
            {id:15, title:"Calathea Insignis", price:"20000", description:"", image:"calatheainsignis.jpg", category:1},
            {id:16, title:"Calathea Makoyana", price:"21000", description:"", image:"calatheamakoyana.jpg", category:1},
            {id:17, title:"Chamaedorea elegans", price:"13500", description:"", image:"chamaedoreaelegans.jpg", category:1},
            {id:18, title:"Cica", price:"4500", description:"", image:"cica.jpg", category:1},
            {id:19, title:"Cissus", price:"6000", description:"", image:"cissus.jpg", category:1},
            {id:20, title:"Coleo", price:"4800", description:"", image:"coleo.jpg", category:1},
            {id:21, title:"Crassula Arborescens", price:"2500", description:"", image:"crassulaarborescens.jpg", category:1},
            {id:22, title:"Crassula Ovata", price:"3000", description:"", image:"crassulaovata.jpg", category:1},
            {id:23, title:"Crassula Tetragona", price:"3500", description:"", image:"crassulatetragona.jpg", category:1},
            {id:24, title:"Croton", price:"4000", description:"", image:"croton.jpg", category:1},
            {id:25, title:"Cuerno de Alce", price:"15000", description:"", image:"cuernodealce.jpg", category:1},
            {id:26, title:"Delosperma de Lehmann", price:"3500", description:"", image:"delospermalehmannii.jpg", category:1},
            {id:27, title:"Dieffenbachia", price:"4500", description:"", image:"dieffenbachia.jpg", category:1},
            {id:28, title:"Dipladenia", price:"12000", description:"", image:"dipladenia.jpg", category:1},
            {id:29, title:"Dólar Blanco", price:"8000", description:"", image:"dolarblanco.jpg", category:1},
            {id:30, title:"Dólar Negro", price:"6000", description:"", image:"dolarnegro.jpg", category:1},
            {id:31, title:"Dólar Variegado", price:"6000", description:"", image:"dolarvariegado.jpg", category:1},
            {id:32, title:"Dólar Verde", price:"6000", description:"", image:"dolarverde.jpg", category:1},
            {id:33, title:"Dracena Lemon", price:"7500", description:"", image:"dracenalimon.jpg", category:1},
            {id:34, title:"Dracena Multicolor", price:"12000", description:"", image:"dracenamulticolor.jpg", category:1},
            {id:35, title:"Dracena Verde", price:"10500", description:"", image:"dracenaverde.jpg", category:1},
            {id:36, title:"Echeveria Agavoides", price:"3500", description:"", image:"echeveriaagavoides.jpg", category:1},
            {id:37, title:"Tierra de hoja orgánica 8L", price:"2000", description:"8L", image:"tierradehoja.jpg", category:2},
            {id:38, title:"Tierra de hoja orgánica 40L", price:"4000", description:"40L", image:"tierradehoja.jpg", category:2},
            {id:39, title:"Sustrato plantas de interior 3L", price:"2500", description:"3L", image:"sustratos.jpg", category:2},
            {id:40, title:"Sustrato plantas de interior 10L", price:"12500", description:"10L", image:"sustratos.jpg", category:2},
            {id:41, title:"Sustrato plantas de interior 50L", price:"17500", description:"10L", image:"sustratos.jpg", category:2}
        ];

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });

        getProductos.then((respuesta) => {
            setItems(respuesta);
        })
    }, []);
   
    return (
        <div className="container">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListsContainer