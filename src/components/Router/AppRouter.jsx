import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Contacto } from "../Contacto/Contacto";
import { Home } from "../Home/Home";
import { Cart } from '../Cart/Cart';
import { CartWidget } from "../CartWidget/CartWidget";
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { LoginScreen } from '../LoginScreen/LoginScreen';
import RegisterScreen from '../LoginScreen/RegisterScreen';
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { MenuNav } from "../MenuNav/MenuNav";
import { Checkout } from "../Checkout/Checkout";


const AppRouter = () => {
    const { user } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <MenuNav />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/tienda' element={<ItemListContainer />} />
                <Route path='/tienda/:categoriaId' element={<ItemListContainer />} />
                <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
                <Route path='/contacto' element={<Contacto />} />


                {
                    user.logged
                        ? <>
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/carrito' element={<CartWidget />} />
                            <Route path='/checkout' element={<Checkout />} />
                            
                        </>
                        :
                        <>
                            <Route path='/login' element={<LoginScreen />} />
                            <Route path='/register' element={<RegisterScreen />} />
                        </>

                }
                <Route path='*' element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter



/*
        <BrowserRouter>
            <MenuNav />
            {

                user.logged
                    ? <>

                        
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/tienda' element={<ItemListContainer />} />
                            <Route path='/tienda/:categoriaId' element={<ItemListContainer />} />
                            <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
                            <Route path='/contacto' element={<Contacto />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/carrito' element={<CartWidget />} />
                            <Route path='*' element={<Navigate to={"/"} />} />
                        </Routes>
                    </>
                    : <Routes>
                        
                        <Route path='/login' element={<LoginScreen />} />
                        <Route path='/register' element={<RegisterScreen />} />
                        <Route path='*' element={<Navigate to="/login" />} />
                    </Routes>
            }
        </BrowserRouter>

*/