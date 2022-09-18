import './App.css';
import Navbar from './Components/Header/Navbar/Navbar';
import Title from './Components/Title/Title';
import Inicio from './Components/Inicio/Inicio';
import Servicios from './pages/Servicios/Servicios';
import ItemListsContainer from './Components/ItemListContainer/ItemListContainer';
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
            <Route path="/" element={<Inicio />} />
            <Route path="/pages/servicios" element={<Servicios />} />
            <Route path="/pages/catalogo" element={<ItemListsContainer />} />
            <Route path="/pages/nosotros" element={<Nosotros />} />
            <Route path='/pages/catalogo/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/pages/catalogo/categoria/:categoryId' element={<ItemListsContainer />} />
            <Route path="/pages/cart" element ={<Cart />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>  
    </>
  );
}

export default App;