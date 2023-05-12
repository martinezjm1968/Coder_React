import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MenuNav } from "./components/MenuNav/MenuNav";
import { Footer } from "./components/Footer/Footer";
import { Contacto } from "./components/Contacto/Contacto";
import { Home } from "./components/Home/Home";
import { CartWidget } from "./components/CartWidget/CartWidget";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from './components/Context/CartContext';
import { Cart } from './components/Cart/Cart';
import { CotizacionDolarProvider } from './components/Context/CotizacionDolar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CotizacionDolarProvider>
      <CartProvider>
        <BrowserRouter>
          < MenuNav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/tienda' element={<ItemListContainer />} />
            <Route path='/tienda/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<CartWidget />} />
            <Route path='/contacto' element={<Contacto />} />

            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Navigate to={"/"} />} />
            
          </Routes>
          < Footer />
        </BrowserRouter>
      </CartProvider>
    </CotizacionDolarProvider>

  );

}

export default App;

