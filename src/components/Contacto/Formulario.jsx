import React, { useState } from 'react';
import { db } from "../Firebase/Config.js"
import { collection, getDoc, addDoc, writeBatch, doc } from "firebase/firestore"
import "./Formulario.css"


export function Formulario() {
    const [fechaConsulta, setCurrentDate] = useState(new Date());
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
        tel: '',
        dir: '',
        cuit: '',
        fecha: fechaConsulta
    })
    

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    // Para que no se me borren los datos por accidente
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log("Submit");
        //console.log(values);

        const consultaDB = collection(db, 'consultas')
        addDoc(consultaDB, values)
            .then(() => {
                alert("Su consulta fue gurdada correctamente!");
                // Reiniciar los valores del formulario después de guardar los datos
                setValues({
                    name: '',
                    email: '',
                    message: '',
                    tel: '',
                    dir: '',
                    cuit: '',
                    fecha: fechaConsulta
                });
            })
            .catch((error) => {
                alert("Error al guardar los datos de su consulta!", error);
            });
    }

    return (
        <div className="container my-2">
            <h2>Contacto</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    value={values.name}
                    onChange={handleInputChange}
                    className="form-control my-2"
                    type="text"
                    placeholder="Tu nombre"
                    required
                />

                <input
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    className="form-control my-2"
                    type="email"
                    placeholder="email"
                    required
                />

                <input
                    name="tel"
                    onChange={handleInputChange}
                    value={values.tel}
                    className="form-control my-2"
                    type="text"
                    placeholder="Teléfono"
                    required
                />

                <input
                    name="dir"
                    onChange={handleInputChange}
                    value={values.dir}
                    className="form-control my-2"
                    type="text"
                    placeholder="Dirección"
                    required
                />

                <input
                    name="cuit"
                    onChange={handleInputChange}
                    value={values.cuit}
                    className="form-control my-2"
                    type="text"
                    placeholder="CUIT"
                    required
                />

                <input
                    name="message"
                    onChange={handleInputChange}
                    value={values.message}
                    className="form-control my-2"
                    type="text"
                    placeholder="Mensaje"
                    required
                />

                <br />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}
