import { useContext, useState, useEffect } from "react"
import { CartContext } from "../Context/CartContext"
import { Navigate } from 'react-router-dom'
import { collection, getDoc, addDoc, writeBatch, doc } from "firebase/firestore"
import { db } from "../Firebase/Config.js"
import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { AuthContext } from "../Context/AuthContext";
import { FaTrashAlt } from 'react-icons/fa';
import { CotizacionDolar } from '../Context/CotizacionDolar';

const schema = Yup.object().shape({
    nombre: Yup.string()
        .required("Este campo es requerido")
        .min(3, "El nombre es muy corto")
        .max(20, "El nombre es demasiado largo"),
    direccion: Yup.string()
        .required("Este campo es requerido")
        .min(6, "La direccion es muy corta")
        .max(40, "La direccion es demasiado larga"),
    tel: Yup.string()
        .required("Este campo es requerido")
        .min(10, "El tel debe tener al menos 10 digitos")
        .max(20, "El nro tel es demasiado larga"),
    cuit: Yup.string()
        .required("Este campo es requerido")
        .min(11, "CUIT debe tener 11 digitos")
        .max(12, "CUIT debe tener 11 digitos"),
    email: Yup.string()
        .email("El email no es válido")
        .required("Este campo es requerido")
})


export const Checkout = () => {
    const { cart, totalCompra, emptyCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)
    const [orderId, setOrderId] = useState(null)
    const { dolar } = useContext(CotizacionDolar)

    const [fechaCompra, setCurrentDate] = useState(new Date());
    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    const decimales = {
        maximumFractionDigits: 0 // Establece el número máximo de dígitos decimales a 0
    };
    const total = totalCompra()
    const subtotal = Number(total) / 1.21
    const IVA = Number(total) - subtotal

    const generarOrden = async (values) => {
        const orden = {
            client: values,
            items: cart.map(item => ({ id: item.id, nombre: item.title, cantidad: item.cantidad, precio: item.precio })),
            total: totalCompra(),
            fyh: new Date()
        }


        const batch = writeBatch(db)
        const productosRef = collection(db, "items")
        const ordersRef = collection(db, "orders")

        const promesas = cart.map((item) => {
            const ref = doc(productosRef, item.id)
            return getDoc(ref)
        })

        const productos = await Promise.all(promesas)

        const outOfStock = []

        productos.forEach((doc) => {
            const item = cart.find((i) => i.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)

            }
        })


        if (outOfStock.length === 0) {
            addDoc(ordersRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    emptyCart()
                })
        } else {

            alert("Posee ITEMS sin stock!")
        }

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
                                            <p>Fecha de compra: {fechaCompra.toLocaleDateString()}</p>
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
                        <h5>SubTotal: ${subtotal.toLocaleString('es-AR', decimales)}</h5>
                        <h5>IVA: ${IVA.toLocaleString('es-AR', decimales)}</h5>
                        <hr />
                        <h4>TOTAL: ${totalCompra().toLocaleString('es-AR', decimales)}</h4>
                        <hr />

                    </div>


                    <Formik
                        initialValues={{
                            nombre: '',
                            direccion: '',
                            tel: '',
                            cuit: '',
                            fecha: fechaCompra,
                            email: user.email
                        }}
                        validationSchema={schema}
                        onSubmit={generarOrden}
                    >
                        {() => (
                            <Form>
                                <Field name="nombre" type="text" placeholder="Nombre y Apellido" className="form-control my-2" />
                                <ErrorMessage name="nombre" component={"p"} />
                                <Field name="direccion" type="text" placeholder="Direccion completa" className="form-control my-2" />
                                <ErrorMessage name="direccion" component={"p"} />

                                <Field name="tel" type="text" placeholder="Telefono (carcteristica y nro)" className="form-control my-2" />
                                <ErrorMessage name="tel" component={"p"} />
                                <Field name="cuit" type="text" placeholder="CUIT (sin guiones)" className="form-control my-2" />
                                <ErrorMessage name="cuit" component={"p"} />

                                <Field name="fecha" type="text" placeholder="Fecha" readonly className="form-control my-2" />
                                <ErrorMessage name="fecha" component={"p"} />

                                <Field name="email" type="email" placeholder="Email" readOnly className="form-control my-2" />
                                <ErrorMessage name="email" component={"p"} />

                                <button className="btn btn-primary" type="submit">Enviar</button>
                            </Form>
                        )}
                    </Formik>



                </div>

            </div>
        </div>
    )
}