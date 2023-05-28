import { useContext, useState, useEffect } from "react";
import { CartContext } from "../Context/CartContext";
import { FaTrashAlt } from 'react-icons/fa';
import { CotizacionDolar } from '../Context/CotizacionDolar';
import { Link } from "react-router-dom";
import './Cart.css';

let precioPesos = 0;

export const Cart = () => {
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)
    const { dolar, setDolar } = useContext(CotizacionDolar)

    const decimales = {
        maximumFractionDigits: 0 // Establece el número máximo de dígitos decimales a 0
    };
    const total = totalCompra()
    const subtotal = Number(total) / 1.21
    const IVA = Number(total) - subtotal

    return (
        <div className="contenedor_cart">
            <div className="grid-container">
                <div className="left-column">
                    <div className="row">
                        <div>

                            <h2>Tu compra</h2>
                            <hr />
                            <div className="card-body text-black">
                                {
                                    cart.map((item) => (
                                        <div key={item.id}>
                                            <h4>{item.title}</h4>
                                            <img style={{ width: '80px', height: '80px' }} src={item.imageSource} alt={item.title} />
                                            
                                            <p>Cantidad: {item.cantidad} unidades</p>
                                            <p>Subotal: ${(item.cantidad * dolar.oficial.value_sell * item.precio).toLocaleString()}</p>
                                            <button onClick={() => removeItem(item.id)} className="btn btn-danger"><FaTrashAlt /></button>
                                            <hr />
                                        </div>
                                    ))
                                }
                            </div>
                            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="box">Checkout</div>
                    <br />
                    <button className="costo-envio">Costos de envío</button>
                    <br />
                    <div>
                        <br />
                        <h5>SubTotal: ${subtotal.toLocaleString('es-AR', decimales)}</h5>
                        <h5>IVA: ${IVA.toLocaleString('es-AR', decimales)}</h5>
                        <hr />
                        <h4>TOTAL: ${totalCompra().toLocaleString('es-AR', decimales)}</h4>
                        <hr />


                        <Link to="/checkout" className="btn btn-success">Finalizar mi compra</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


