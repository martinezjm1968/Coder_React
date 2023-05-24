import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { Navigate } from 'react-router-dom'
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from "../Firebase/Config.js"
import { Link } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext";
import "../Cart/Cart.css"
import { CotizacionDolar } from '../Context/CotizacionDolar';
import { FaTrashAlt } from 'react-icons/fa';


export const Checkout = () => {
    const { cart, totalCompra, emptyCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)
    const { dolar } = useContext(CotizacionDolar)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        tel: '',
        cuit: '',
        email: user.email,
        totalCompra: totalCompra()
    })
    const [orderId, setOrderId] = useState(null)

    const handleInput = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { nombre, direccion, email, tel, cuit } = values

        if (nombre.length < 3) {
            alert("El nombre demasiado corto")
            return
        }
        if (direccion.length < 3) {
            alert("Dirección inválida")
            return
        }
        
        if (tel.length < 11) {
            alert("Teléfono inválido")
            return
        }

        if (cuit.length != 11) {
            alert("CUIT inválido")
            return
        }

        if (email.length < 5) {
            alert("Email inválido")
            return
        }

        const orden = {
            client: values,
            items: cart.map(item => ({ id: item.id, nombre: item.title, cantidad: item.cantidad })),
            total: totalCompra(),
            fyh: new Date()
        }


        orden.items.forEach((item) => {
            const itemRef = doc(db, "items", item.id)

            getDoc(itemRef)
                .then((doc) => {
                    if (doc.data().stock >= item.cantidad) {
                        updateDoc(itemRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                    } else {
                        alert("No hay stock de " + item.title)
                    }
                })
        })



        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart()
            })
    }

    if (orderId) {
        return (
            <div className="contenedor_cart">
                <div className="right-column">
                    <h2>Tu compra se registró exitosamente!</h2>
                    <hr />
                    <p>Guardá tu número de orden: {orderId}</p>

                    <Link to="/">Volver</Link>
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }


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
                    <hr />
                    <div>
                        <br />
                        <h4>TOTAL: ${totalCompra().toLocaleString()}</h4>
                        <hr />

                    </div>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            className="form-control my-2"
                            type="text"
                            value={values.nombre}
                            placeholder="Nombre y Apellido"
                            name="nombre"
                            onChange={handleInput}
                        />
                        <input
                            className="form-control my-2"
                            type="text"
                            value={values.direccion}
                            placeholder="Dirección"
                            name="direccion"
                            onChange={handleInput}
                        />
                        <input
                            className="form-control my-2"
                            type="tel"
                            value={values.tel}
                            placeholder="Teléfono (caracteristica + nro)"
                            name="tel"
                            onChange={handleInput}
                        />
                        <input
                            className="form-control my-2"
                            type="cuit"
                            value={values.cuit}
                            placeholder="CUIT"
                            name="cuit"
                            onChange={handleInput}
                        />
                        <input
                            className="form-control my-2"
                            type="email"
                            value={values.email}
                            placeholder="Email"
                            name="email"
                            onChange={handleInput}
                            readOnly
                        />

                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

