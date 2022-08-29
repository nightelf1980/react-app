import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title';
import Carousel from './Components/Carousel/Carousel';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ItemListsContainer from './Components/ItemListContainer/ItemListContainer';

function App() {

  const productos = [
    {id:1, title:"Agave Attenuata", precio:"4500", descripcion:"", imagen:"agaveattenuata.jpg", categoria:1},
    {id:2, title:"Alegria Nueva Guinea", precio:"3000", descripcion:"", imagen:"alegrianuevaguinea.jpg", categoria:1},
    {id:3, title:"Aloe Vera", precio:"2500", descripcion:"", imagen:"aloevera.jpg", categoria:1},
    {id:4, title:"Anthurium Andreanum", precio:"7500", descripcion:"", imagen:"anthuriumandreanum.jpg", categoria:1},
    {id:5, title:"Anthurium Coriaceum", precio:"4800", descripcion:"", imagen:"anthuriumcoriaceum.jpg", categoria:1},
    {id:6, title:"Aralia Japonica", precio:"4500", descripcion:"", imagen:"araliajaponica.jpg", categoria:1}]
  
  const items = productos.map(items => (
    <ItemListsContainer valor={items.title}/>
  ));
  
  return (
    <div>
      <Header />
      <Title />
      <Carousel />
      <div className='container'>
        <Main valor="Catálogo de productos"/>
        <div className="row d-flex justify-content-center">
          {items}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
