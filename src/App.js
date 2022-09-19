import './App.css';
import React from 'react';
import Navbar from './Components/Header/Navbar/Navbar';
import Title from './Components/Title/Title';
import Inicio from './Components/Inicio/Inicio';
import Servicios from './pages/Servicios/Servicios';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import Nosotros from './pages/Nosotros/Nosotros';
import Cart from './pages/Cart/Cart'
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './context/CartContext';

function App () {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Title />
          <Routes>
            <Route exact path="/" element={<Inicio />} />
            <Route path="/pages/servicios" element={<Servicios />} />
            <Route path="/pages/catalogo" element={<ItemListContainer />} />
            <Route path="/pages/categoria" element={<ItemListContainer />} />
            <Route path="/pages/nosotros" element={<Nosotros />} />
            <Route path='/pages/catalogo/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/pages/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path="/pages/cart" element ={<Cart />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>  
    </>
  );
}

export default App;