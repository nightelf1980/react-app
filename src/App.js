import './App.css';
import Navbar from './assets/Navbar';
import Title from './assets/Title';
import Carousel from './assets/Carousel';
import CartWidget from './assets/CartWidget';
import Footer from './assets/Footer';
import MainIndex from './assets/MainIndex';

function App() {
  return (
    <div>
      <div className='container-fluid row d-flex bg-light '>
        <Navbar />
        <CartWidget />
      </div>
      <Title />
      <Carousel />
      <MainIndex />
      <Footer/>
    </div>
  );
}

export default App;
