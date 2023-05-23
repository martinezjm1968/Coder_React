import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { Navigate } from 'react-router-dom'
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from "../Firebase/Config.js"
import { Link } from "react-router-dom"

export const Checkout = () => {
    const { cart, totalCompra, emptyCart } = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
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

        const { nombre, direccion, email } = values

        if (nombre.length < 3) {
            alert("El nombre demasiado corto")
            return
        }
        if (direccion.length < 3) {
            alert("Dirección inválida")
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

        console.log(orden)

        orden.items.forEach((item) => {
            const itemRef = doc(db, "productos", item.id)

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

        // addDoc(ordersRef, orden)
        //     .then((doc) => {
        //         setOrderId(doc.id)
        //         emptyCart()
        //     })
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra se registró exitosamente!</h2>
                <hr />
                <p>Guardá tu número de orden: {orderId}</p>

                <Link to="/">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }


    return (
        <div>


            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type="text"
                    value={values.nombre}
                    placeholder="Nombre"
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
                    type="email"
                    value={values.email}
                    placeholder="Email"
                    name="email"
                    onChange={handleInput}
                />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

// <div className="container my-5"></div>