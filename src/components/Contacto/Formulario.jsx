import React, { useState } from 'react';
import "./Formulario.css"


export function Formulario() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
        tel: '',
        dir: '',
        cuit: ''
    })

    const handleInputChange = (e) => {
        console.log(e.target.name)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("SUbmit")
        console.log(values)
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
                />

                <input
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    className="form-control my-2"
                    type="email"
                    placeholder="email"
                />

                <input
                    name="tel"
                    onChange={handleInputChange}
                    value={values.tel}
                    className="form-control my-2"
                    type="text"
                    placeholder="Teléfono"
                />

                <input
                    name="dir"
                    onChange={handleInputChange}
                    value={values.dir}
                    className="form-control my-2"
                    type="text"
                    placeholder="Dirección"
                />

                <input
                    name="cuit"
                    onChange={handleInputChange}
                    value={values.cuit}
                    className="form-control my-2"
                    type="text"
                    placeholder="CUIT"
                />

                <input
                    name="message"
                    onChange={handleInputChange}
                    value={values.message}
                    className="form-control my-2"
                    type="text"
                    placeholder="Mensaje"
                />

                <br />

                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}
