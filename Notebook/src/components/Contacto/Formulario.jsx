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



/*

        <form className='formulario' onSubmit={handleSubmit}>
            <div>
                <h2>Formulario de Contacto</h2>

                <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="row">
                        <div>
                            <label className='etiquetas' htmlFor="name">Nombre y Apellido: </label>
                            <div>
                                <input className='ingreso'
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className='etiquetas' htmlFor="email">Email: </label>
                            <div>
                                <input className='ingreso'
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className='etiquetas' htmlFor="message">Mensaje: </label>
                            <div>
                                <textarea cols="40" rows="3" className='ingreso'
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <label className='etiquetas' htmlFor="tel">Tel: </label>
                            <div>
                                <input className='ingreso'
                                    type="text"
                                    id="tel"
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className='etiquetas' htmlFor="dir">Dirección: </label>
                            <div>
                                <input className='ingreso'
                                    type="dir"
                                    id="email"
                                    value={dir}
                                    onChange={(e) => setDir(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className='etiquetas' htmlFor="cuit">CUIT: </label>
                            <div>
                                <input className='ingreso'
                                    id="cuit"
                                    value={cuit}
                                    onChange={(e) => setCuit(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                </div>
                <p></p>
                <button className='boton' type="submit">Enviar</button>
            </div>
        </form>
    );
}

*/
