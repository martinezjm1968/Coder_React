import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FaTrashAlt } from 'react-icons/fa';
import { CotizacionDolar } from '../Context/CotizacionDolar';

let precioPesos = 0;

export const Cart = () => {
    const { cart, emptyCart, totalCompra, removeItem } = useContext(CartContext)
    const { dolar, setDolar } = useContext(CotizacionDolar)



    return (
        <div className="container my-5">

            <h2>Tu compra</h2>
            <hr />

            {
                cart.map((item) => (
                    <div className="card-body text-black">
                        <div key={item.id}>
                            <h4>{item.title}</h4>
                            <img style={{ width: '80px', height: '80px' }} src={item.imageSource} />
                            <p>Cantidad: {item.cantidad} unidades</p>
                            <p>Subotal: ${(item.cantidad * dolar.oficial.value_sell * item.precio).toLocaleString()}</p>
                            <button onClick={() => removeItem(item.id)} className="btn btn-danger"><FaTrashAlt /></button>
                            <hr />
                        </div>
                    </div>
                ))
            }
            <div>
                <h4>TOTAL: ${totalCompra().toLocaleString()}</h4>
                <hr />
                <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
            </div>
        </div>
    )
}


