import './App.css';
import Header from './Components/Header/Header';
import Title from './Components/Title/Title';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <Title />
      <div className='container'>
        <Main valor="Catálogo de productos"/>
        <div className="row d-flex justify-content-center">
          <ItemListContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
