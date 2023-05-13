import React, { useState } from 'react';
import "./Formulario.css"

export function Formulario() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [tel, setTel] = useState('');
    const [dir, setDir] = useState('');
    const [cuit, setCuit] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Nombre: ${name}, Email: ${email}, Mensaje: ${message}`);

    };

    return (
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


