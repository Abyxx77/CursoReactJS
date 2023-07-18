import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/Navbar/navbar';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Cart } from './pages/cart/cart';

function App() {
  return (
    <div className="App"> 
      
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products/> } />
          <Route path="/cart" element={<Cart/> } />
        </Routes>
        
      </Router> 
    </div>
  );
}

export default App;
