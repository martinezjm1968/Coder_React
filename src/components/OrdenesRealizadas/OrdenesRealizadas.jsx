import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore"
import "firebase/firestore";
import { db } from "../Firebase/Config.js"
import { AuthContext } from "../Context/AuthContext";
import Loader from '../Loader/Loader'
import { CotizacionDolar } from '../Context/CotizacionDolar';
import "../Cart/Cart.css"

export const OrdenesRealizadas = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)
    const { dolar } = useContext(CotizacionDolar)


    // Obtén el usuario logeado y su dirección de correo electrónico
    //const { user } = useContext(AuthContext)
    const { user } = useContext(AuthContext)
    const userEmail = user.email;

    useEffect(() => {
        setLoading(true)

        // 1.- Armar una referencia (sync)
        const ordenes = collection(db, "orders")
        const q = userEmail
            ? query(ordenes, where("client.email", "==", userEmail), orderBy("client.fecha"))
            : ordenes
        // 2.- Consumir esa referencia (async)

        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setOrders(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [])
    return (

        <div className="contenedor_cart">
            <div>
                <h5>Órdenes del usuario: {userEmail}</h5>
                {loading
                    ? <Loader />
                    : (
                        <ul>
                            {orders.map((order) => (
                                <div className="grid-container">
                                    <div className="left-column">
                                        <div>
                                            <div className="row">
                                                <div>
                                                    <div className="card-body text-black" style={{ fontSize: '12px' }}>
                                                        <p>Nombre: {order.client.nombre}</p>
                                                        <p>Direccion: {order.client.direccion}</p>
                                                        <p>CUIT: {order.client.cuit}</p>
                                                        <p>Fecha de compra: {order.client.fecha.toDate().toLocaleDateString()}</p>
                                                        <p>Total: ${(order.total).toLocaleString()}</p>
                                                        <hr />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="right-column">
                                                <div className="row">
                                                    <div className="card-body text-white bg-secondary" style={{ fontSize: '12px' }}>
                                                        <ul >
                                                            {order.items.map((item) => (
                                                                <li key={item.id} >
                                                                    <p> Producto: {item.nombre} </p>
                                                                    <p> Cantidad: {item.cantidad} </p>
                                                                    <p> Precio: u${item.precio}</p>
                                                                    <p> Precio u$s Actual: ${(item.precio * dolar.oficial.value_sell).toLocaleString()}</p>
                                                                </li>
                                                            ))}

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </ul>)
                }
            </div>
        </div>
    );
};


