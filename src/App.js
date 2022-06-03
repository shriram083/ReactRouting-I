import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Product from './components/Product'
import Products from './components/Products'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />}/>
        <Route path='/products/:id' element={<Product />}  />
      </Routes>
    </div>
  );
}

export default App;
