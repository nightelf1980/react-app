import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title';
import Main from './Components/Main/Main';
import ItemListsContainer from './Components/ItemListContainer/ItemListContainer';
import Footer from './Components/Footer/Footer';

function App() {

  const productos = [
    {id:1, title:"Agave Attenuata", precio:"4500", descripcion:"", imagen:"agaveattenuata.jpg", categoria:1},
    {id:2, title:"Alegria Nueva Guinea", precio:"3000", descripcion:"", imagen:"alegrianuevaguinea.jpg", categoria:1},
    {id:3, title:"Aloe Vera", precio:"2500", descripcion:"", imagen:"aloevera.jpg", categoria:1},
    {id:4, title:"Anthurium Andreanum", precio:"7500", descripcion:"", imagen:"anthuriumandreanum.jpg", categoria:1},
    {id:5, title:"Anthurium Coriaceum", precio:"4800", descripcion:"", imagen:"anthuriumcoriaceum.jpg", categoria:1},
    {id:6, title:"Aralia Japonica", precio:"4500", descripcion:"", imagen:"araliajaponica.jpg", categoria:1},
    {id:7,title:"Aspidistra Variegada",precio:"6500",descripcion:"",imagen:"aspidistravariegada.jpg",categoria:1},
    {id:8,title:"Bacopa",precio:"5000",descripcion:"",imagen:"bacopa.jpg",categoria:1},
    {id:9,title:"Begonia",precio:"5500",descripcion:"",imagen:"begonia.jpg",categoria:1},
    {id:10, title:"Begonia Dragon Wing", precio:"6500", descripcion:"", imagen:"begoniadragonwing.jpg", categoria:1},
    {id:11, title:"Cactus Grusonii", precio:"120000", descripcion:"", imagen:"cactusgrusonii.jpg", categoria:1},
    {id:12, title:"Cactus injertado", precio:"12000", descripcion:"", imagen:"cactusinjertado.jpg", categoria:1}]
  
  const items = productos.map(items => (
    <ItemListsContainer titulo={items.title} precio={"Precio unidad: $ " + items.precio} imagen={items.imagen}/>
  ));
  
  return (
    <div>
      <Header />
      <Title />
      <div className='container'>
        <Main valor="Catálogo de productos"/>
        <div className="row d-flex justify-content-center">
          {items}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
