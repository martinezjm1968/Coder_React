import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { collection, query, where, getDocs } from "firebase/firestore"
import "firebase/firestore";
import { db } from "../Firebase/Config.js"
import { AuthContext } from "../Context/AuthContext";
import Loader from '../Loader/Loader'

export const OrdenesRealizadas = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true)


    console.log("Estoy en ordenes realizadas!!!!!");

    // Obtén el usuario logeado y su dirección de correo electrónico
    //const { user } = useContext(AuthContext)
    const { user } = useContext(AuthContext)
    const userEmail = user.email;


    useEffect(() => {
        setLoading(true)
        console.log("Mail registrado: " + userEmail);
        // 1.- Armar una referencia (sync)
        const ordenes = collection(db, "orders")
        const q = userEmail
            ? query(ordenes, where("client.email", "==", userEmail))
            : ordenes
        // 2.- Consumir esa referencia (async)
        console.log("Que tiene q:" + q);
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
            .catch(e => alert(e))
            .finally(() => setLoading(false))

    }, [])


    console.log("Que tiene orders: " + orders);
    return (

        //<div className="container my-2 justify-content-center bg-light">
        <div className="contenedor_cart">
            <div className="grid-container">
                <div className="left-column">

                    <h2>Órdenes del usuario: {userEmail}</h2>
                    {loading
                        ? <Loader />
                        : (
                            <ul>


                                {orders.map((order) => (
                                    <div className="row">
                                        <p>Nombre: {order.client.nombre}</p>
                                        <p>Direccion: {order.client.direccion}</p>
                                        <p>CUIT: {order.client.cuit}</p>
                                        <p>Total: ${(order.total).toLocaleString()}</p>
                                        <ul>
                                            <div className="right-column">
                                                {order.items.map((item) => (
                                                    <li key={item.id}>
                                                        <p> Producto: {item.nombre} </p>
                                                        <p> Cantidad: {item.cantidad} </p>
                                                        <hr/>
                                                    </li>
                                                ))}
                                            </div>
                                        </ul>
                                        <hr />
                                    </div>
                                ))}
                            </ul>)
                    }
                </div>
            </div>
        </div>
    );
};


