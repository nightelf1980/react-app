import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title';
import Footer from './Components/Footer/Footer';
/* import Inicio from './Components/Inicio/Inicio'; */
import Cactus from './views/Cactus/Cactus';
import Suculentas from './views/Suculentas/Suculentas';
import Catalogo from './views/Catalogo/Catalogo';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <Title />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Catalogo />} />
          <Route exact path="/información/cactus" element={<Cactus />} />
          <Route exact path="/información/suculentas" element={<Suculentas />} />
          <Route exact path="/catalogo/interioryexterior" element={<Catalogo categoria="1"/>} />
          <Route exact path="/catalogo/tierradehoja" element={<Catalogo categoria="2"/>} />
          <Route exact path="/catalogo/sustratos" element={<Catalogo categoria="3"/>} />
          <Route exact path="/catalogo/maceteros" element={<Catalogo categoria="4"/>} />
        </Routes>
      </BrowserRouter>
      <Footer />  
    </div>
  );
}

export default App;