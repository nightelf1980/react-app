import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "../ItemList/ItemList"

const ItemListsContainer = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        const productos = [
            {id:1, title:"Agave Attenuata", precio:"4500", descripcion:"", imagen:"agaveattenuata.jpg", categoria:1},
            {id:2, title:"Alegria Nueva Guinea", precio:"3000", descripcion:"", imagen:"alegrianuevaguinea.jpg", categoria:1},
            {id:3, title:"Aloe Vera", precio:"2500", descripcion:"", imagen:"aloevera.jpg", categoria:1},
            {id:4, title:"Anthurium Andreanum", precio:"7500", descripcion:"", imagen:"anthuriumandreanum.jpg", categoria:1},
            {id:5, title:"Anthurium Coriaceum", precio:"4800", descripcion:"", imagen:"anthuriumcoriaceum.jpg", categoria:1},
            {id:6, title:"Aralia Japonica", precio:"4500", descripcion:"", imagen:"araliajaponica.jpg", categoria:1},
            {id:7, title:"Aspidistra Variegada", precio:"6500", descripcion:"", imagen:"aspidistravariegada.jpg", categoria:1},
            {id:8, title:"Bacopa", precio:"5000", descripcion:"", imagen:"bacopa.jpg", categoria:1},
            {id:9, title:"Begonia", precio:"5500", descripcion:"", imagen:"begonia.jpg", categoria:1},
            {id:10, title:"Begonia Dragon Wing", precio:"6500", descripcion:"", imagen:"begoniadragonwing.jpg", categoria:1},
            {id:11, title:"Cactus Grusonii", precio:"120000", descripcion:"", imagen:"cactusgrusonii.jpg", categoria:1},
            {id:12, title:"Cactus injertado", precio:"12000", descripcion:"", imagen:"cactusinjertado.jpg", categoria:1},
            {id:13, title:"Cactus San Pedro", precio:"8000", descripcion:"", imagen:"cactussanpedro.jpg", categoria:1},
            {id:14, title:"Caladium Rojo", precio:"18000", descripcion:"", imagen:"caladiumrojo.jpg", categoria:1},
            {id:15, title:"Calathea Insignis", precio:"20000", descripcion:"", imagen:"calatheainsignis.jpg", categoria:1},
            {id:16, title:"Calathea Makoyana", precio:"21000", descripcion:"", imagen:"calatheamakoyana.jpg", categoria:1},
            {id:17, title:"Chamaedorea elegans", precio:"13500", descripcion:"", imagen:"chamaedoreaelegans.jpg", categoria:1},
            {id:18, title:"Cica", precio:"4500", descripcion:"", imagen:"cica.jpg", categoria:1},
            {id:19, title:"Cissus", precio:"6000", descripcion:"", imagen:"cissus.jpg", categoria:1},
            {id:20, title:"Coleo", precio:"4800", descripcion:"", imagen:"coleo.jpg", categoria:1},
            {id:21, title:"Crassula Arborescens", precio:"2500", descripcion:"", imagen:"crassulaarborescens.jpg", categoria:1},
            {id:22, title:"Crassula Ovata", precio:"3000", descripcion:"", imagen:"crassulaovata.jpg", categoria:1},
            {id:23, title:"Crassula Tetragona", precio:"3500", descripcion:"", imagen:"crassulatetragona.jpg", categoria:1},
            {id:24, title:"Croton", precio:"4000", descripcion:"", imagen:"croton.jpg", categoria:1},
            {id:25, title:"Cuerno de Alce", precio:"15000", descripcion:"", imagen:"cuernodealce.jpg", categoria:1},
            {id:26, title:"Delosperma de Lehmann", precio:"3500", descripcion:"", imagen:"delospermalehmannii.jpg", categoria:1},
            {id:27, title:"Dieffenbachia", precio:"4500", descripcion:"", imagen:"dieffenbachia.jpg", categoria:1},
            {id:28, title:"Dipladenia", precio:"12000", descripcion:"", imagen:"dipladenia.jpg", categoria:1},
            {id:29, title:"Dólar Blanco", precio:"8000", descripcion:"", imagen:"dolarblanco.jpg", categoria:1},
            {id:30, title:"Dólar Negro", precio:"6000", descripcion:"", imagen:"dolarnegro.jpg", categoria:1},
            {id:31, title:"Dólar Variegado", precio:"6000", descripcion:"", imagen:"dolarvariegado.jpg", categoria:1},
            {id:32, title:"Dólar Verde", precio:"6000", descripcion:"", imagen:"dolarverde.jpg", categoria:1},
            {id:33, title:"Dracena Lemon", precio:"7500", descripcion:"", imagen:"dracenalimon.jpg", categoria:1},
            {id:34, title:"Dracena Multicolor", precio:"12000", descripcion:"", imagen:"dracenamulticolor.jpg", categoria:1},
            {id:35, title:"Dracena Verde", precio:"10500", descripcion:"", imagen:"dracenaverde.jpg", categoria:1},
            {id:36, title:"Echeveria Agavoides", precio:"3500", descripcion:"", imagen:"echeveriaagavoides.jpg", categoria:1},
            {id:37, title:"Tierra de hoja orgánica 20L", precio:"4500", descripcion:"40L", imagen:"tierradehoja.jpg", categoria:2},
            {id:38, title:"Tierra de hoja orgánica 50L", precio:"6000", descripcion:"50L", imagen:"tierradehoja.jpg", categoria:2},
            {id:39, title:"Sustrato plantas de interior 3L", precio:"2500", descripcion:"3L", imagen:"sustratos.jpg", categoria:2},
            {id:40, title:"Sustrato plantas de interior 10L", precio:"7500", descripcion:"10L", imagen:"sustratos.jpg", categoria:2}
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
        <div className="col-md-12 py-3">
            <ItemList items={items} />
        </div>
    )
}

export default ItemListsContainer