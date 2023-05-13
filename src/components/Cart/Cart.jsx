import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FaTrashAlt } from 'react-icons/fa';
import { CotizacionDolar } from '../Context/CotizacionDolar';
import './Cart.css';

let precioPesos = 0;

export const Cart = () => {
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)
    const { dolar, setDolar } = useContext(CotizacionDolar)



    return (
        <div className="contenedor_cart">
            <div class="grid-container">
                <div class="left-column">
                    <div class="row">
                        <h2>Tu compra</h2>
                        <hr />
                        <div className="card-body text-black">
                        {
                            cart.map((item) => (
                                    <div key={item.id}>
                                        <h4>{item.title}</h4>
                                        <img style={{ width: '80px', height: '80px' }} src={item.imageSource} />
                                        <p>Cantidad: {item.cantidad} unidades</p>
                                        <p>Subotal: ${(item.cantidad * dolar.oficial.value_sell * item.precio).toLocaleString()}</p>
                                        <button onClick={() => removeItem(item.id)} className="btn btn-danger"><FaTrashAlt /></button>
                                        <hr />
                                    </div>
                                
                            ))
                        }
                        </div>
                        
                    </div>
                </div>
                <div class="right-column">
                    <div class="box">Checkout</div>
                    <br/>
                    <button className="btn btn-info align-items-center">Costos de envío</button>
                    <br/>
                    <div>
                            <br/>
                            <h4>TOTAL: ${totalCompra().toLocaleString()}</h4>
                            <hr />
                            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
                            <button onClick={emptyCart} className="btn btn-success">Finalizar Compra</button>
                        </div>
                </div>
            </div>
        </div>
    )
}


