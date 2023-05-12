import { useContext, useState } from "react";
import { Contador } from '../Contador/Contador';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import { CotizacionDolar } from '../Context/CotizacionDolar';

let precioPesos = 0;

export const ItemDetails = ({ item }) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)
    const { dolar, setDolar } = useContext(CotizacionDolar)
    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
        }
        agregarAlCarrito(newItem)
    }

    precioPesos = dolar.oficial.value_sell * item.precio;


    return (
        <div className="col-md-5">

            <div className="card text-center bg-light animate__animated animate__fadeInUp">
                <div className="overflow">
                    <img src={item.imageSource} alt="a wallpaper" className="card-img-top" />
                </div>
                <div className="card-body text-light">
                    <h4 style={{ color: 'black' }} className="card-title">{item.title}</h4>
                    <p className="card-text text-dark">
                        {item.cuerpo}
                    </p>

                    <p style={{ color: 'black' }}> Stock actual: {item.stock}  </p>
                    
                    <p style={{ fontSize: '16px', color: 'black' }}> Precio Unitario: u${item.precio}  </p>
                    
                    {dolar &&
                        <>
                            <p style={{ fontSize: '16px', color: 'black' }}>  Precio Unitario: ${(precioPesos).toLocaleString()}  </p>
                            <p style={{ fontSize: '16px', color: 'black' }}> <strong> Subtotal: ${(precioPesos * cantidad).toLocaleString()} </strong> </p>
                        </>
                    }
                    <br />
                    {
                        isInCart(item.id)
                            ? <Link className="btn btn-success" to="/cart">Terminar mi compra</Link>
                            : <Contador
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                stock={item.stock}
                                agregar={handleAgregar}
                            />
                    }


                </div>
            </div>

        </div>
    )
}

