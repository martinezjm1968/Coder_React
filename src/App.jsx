import React from 'react';
import { CartProvider } from './components/Context/CartContext';
import { AuthProvider } from '../src/components/Context/AuthContext';
import AppRouter from '../src/components/Router/AppRouter';
import { Footer } from "../src/components/Footer/Footer";
import { CotizacionDolarProvider } from '../src/components/Context/CotizacionDolar';
import "./App.css";

function App() {

  return (

    <AuthProvider>
      <CotizacionDolarProvider>
        <CartProvider>
          
            
            <AppRouter />
            < Footer />
          
        </CartProvider>
      </CotizacionDolarProvider>
    </AuthProvider>
  );
}

export default App;



/*
const logeado = false;
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
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<Navigate to={"/"} />} />
            <Route path='/cart' element={<Cart />} />
            
            <Route path='/carrito' element={<CartWidget} />
            
          </Routes>
          < Footer />
        </BrowserRouter>
      </CartProvider>
    </CotizacionDolarProvider>

  );

}

export default App;

*/