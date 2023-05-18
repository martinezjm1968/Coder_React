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
                                            <h4>{item.titulo}</h4>
                                            <img style={{ width: '80px', height: '80px' }} src={item.imagen} alt={item.titulo}/>
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
                        <h4>TOTAL: ${totalCompra().toLocaleString()}</h4>
                        <hr />


                        <button onClick={emptyCart} className="btn btn-success">Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


