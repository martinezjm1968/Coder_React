import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { db } from "../Firebase/Config.js"
import { collection, query, getDocs, addDoc, updateDoc, doc, where } from "firebase/firestore"
import { AuthContext } from '../Context/AuthContext';
import "./AltaModifClientes.css"


export const AltaModifClientes = () => {
    const { user } = useContext(AuthContext)
    const userEmail = user.email;

    ///////////////////////////////////////////////////////////////////////////////////////////

    const [name, setName] = useState('');
    const [email, setEmail] = useState(userEmail);
    const [dir, setDir] = useState('');
    const [tel, setTel] = useState('');
    const [cuit, setCuit] = useState('');
    const [iva, setIva] = useState('');
    const [iibb, setIibb] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [provincia, setProvincia] = useState('');
    const [pais, setPais] = useState('');
    const [cpostal, setCpostal] = useState('');

    if (userEmail) {
        useEffect(() => {
            const fetchCliente = async () => {
                try {
                    // 1.- Armar una referencia (sync)
                    const clienteRef = collection(db, "Clientes")
                    const q = userEmail
                        ? query(clienteRef, where("email", "==", userEmail))
                        : clienteRef
                    // 2.- Consumir esa referencia (async)
                    const clienteDoc = await getDocs(q);
                    if (!clienteDoc.empty) {
                        console.log("cliente existe");
                        const cliente = clienteDoc.docs[0].data();
                        console.log("Cliente: " + cliente.name);
                        setName(cliente.name);
                        setEmail(userEmail);
                        setDir(cliente.dir);
                        setTel(cliente.tel);
                        setCuit(cliente.cuit);
                        setIva(cliente.iva);
                        setIibb(cliente.iibb);
                        setCiudad(cliente.ciudad);
                        setProvincia(cliente.provincia);
                        setPais(cliente.pais);
                        setCpostal(cliente.cpostal);
                    } else {
                        console.log("cliente NO existe");
                        setName('');
                        setEmail(userEmail);
                        setDir('');
                        setTel('');
                        setCuit('');
                        setIva('');
                        setIibb('');
                        setCiudad('');
                        setProvincia('');
                        setPais('');
                        setCpostal('');
                    }
                } catch (error) {
                    console.log('Error al obtener el cliente:', error);
                }
            };

            fetchCliente();
        }, []);

    }
    ////////////////////////////////////////////////////////////////////////

    const validarCliente = async () => {

        // 1.- Armar una referencia (sync)
        const clientesRef = collection(db, "Clientes")
        const q = userEmail
            ? query(clientesRef, where("email", "==", userEmail))
            : clientesRef
        // 2.- Consumir esa referencia (async)
        const snapshot = await getDocs(q);

        // Me fijo si existe o no existe el cliente
        if (snapshot.empty) {

            console.log("El cliente NO existe! 2");
            // El cliente no existe, dar de alta un nuevo cliente
            const nuevoCliente = {
                name: "",
                email: userEmail,
                tel: "",
                dir: "",
                cuit: "",
                iva: "",
                iibb: "",
                ciudad: "",
                provincia: "",
                pais: "",
                cpostal: 0
            };

            await addDoc(clientesRef, nuevoCliente);
            console.log('Cliente agregado:', nuevoCliente);


        } else {

            console.log("El cliente existe! 2");
            // El cliente existe, actualizar los valores
            const cliente = snapshot.docs[0].data();
            const clienteId = snapshot.docs[0].id;
            const clienteMail = doc(db, "Clientes", clienteId);

            const clienteActualizado = {
                name: name || cliente.name,
                email: email || cliente.email,
                tel: tel || cliente.tel,
                dir: dir || cliente.dir,
                cuit: cuit || cliente.cuit,
                iva: iva || cliente.iva,
                iibb: iibb || cliente.iibb,
                ciudad: ciudad || cliente.ciudad,
                provincia: provincia || cliente.provincia,
                pais: pais || cliente.pais,
                cpostal: cpostal || cliente.cpostal
            };

            await updateDoc(clienteMail, clienteActualizado);
            //clientesRef.doc(clienteId).update(clienteActualizado);
            alert('Cliente actualizado:', clienteActualizado);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Realiza las validaciones aquí
        if (name.length<5) {
            alert('Por favor, ingresa tu nombre, debe ser mayor a 5 caracteres.');
            return;
        }
        if (tel.length < 10) {
            alert('El nro telefónico debe tener más de 10 dígitos.');
            return;
        }
        if (dir.length<10) {
            alert('Por favor, ingresa una dirección, debe ser mayor a 10 caracteres.');
            return;
        }
        if (cuit.length!=11) {
            alert('Por favor, ingresa tu CUIT/CUIL , debe ser de 11 caracteres, sin guiones!.');
            return;
        }
        validarCliente();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container my-2">
                <div className='altamodif'>
                    <h2>Datos del cliente</h2>
                    <hr />
                    <input
                        width={"450px"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control my-2"
                        type="text"
                        placeholder="Nombre, Apellido / Razon Social"
                        required
                    />
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control my-2"
                        type="email"
                        placeholder="E-mail"
                        readOnly
                    />
                    <input
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        className="form-control my-2"
                        type="text"
                        placeholder="Teléfono (cod Pais + Area)"
                        required
                    />
                    <input
                        value={dir}
                        onChange={(e) => setDir(e.target.value)}
                        className="form-control my-2"
                        type="text"
                        placeholder="Dirección"
                        required
                    />
                    <input
                        value={ciudad}
                        onChange={(e) => setCiudad(e.target.value)}
                        className="form-control my-2"
                        type="text"
                        placeholder="Ciudad"
                        required
                    />
                    <label className="form-control my-2">
                        Provincia: &nbsp;
                        <select value={provincia} onChange={(e) => setProvincia(e.target.value)}>
                            <option value="buenosAires">Buenos Aires</option>
                            <option value="caba">CABA</option>
                            <option value="catamarca">Catamarca</option>
                            <option value="chaco">Chaco</option>
                            <option value="chubut">Chubut</option>
                            <option value="cordoba">Cordoba</option>
                            <option value="corrientes">Corrientes</option>
                            <option value="entreRios">Entre Rios</option>
                            <option value="formosa">Formosa</option>
                            <option value="jujuy">Jujuy</option>
                            <option value="laPampa">La Pampa</option>
                            <option value="laRioja">La Rioja</option>
                            <option value="mendoza">Mendoza</option>
                            <option value="misiones">Misiones</option>
                            <option value="neuquen">Neuquen</option>
                            <option value="rioNegro">Rio Negro</option>
                            <option value="salta">Salta</option>
                            <option value="sanJuan">San Juan</option>
                            <option value="sanLuis">San Luis</option>
                            <option value="santaCruz">Santa Cruz</option>
                            <option value="santaFe">Santa Fe</option>
                            <option value="santiagoDelEstero">Santiago Del Estero</option>
                            <option value="tierraDelFuego">Tierra Del Fuego</option>
                            <option value="tucuman">Tucuman</option>
                            className="form-control my-2"
                            type="text"
                            placeholder="Provincia"
                            required
                        </select>
                    </label>
                    <input
                        value={pais}
                        onChange={(e) => setPais(e.target.value)}
                        className="form-control my-2"
                        type="text"
                        placeholder="Pais"
                        required
                    />
                    <input
                        value={cpostal}
                        onChange={(e) => setCpostal(e.target.value)}
                        className="form-control my-2"
                        type="number"
                        placeholder="Código Postal"
                        required
                    />
                    <h2>Datos de Facturación</h2>
                    <hr />
                    <input
                        value={cuit}
                        onChange={(e) => setCuit(e.target.value)}
                        className="form-control my-2"
                        type="text"
                        placeholder="CUIT"
                        required
                    />

                    <label className="form-control my-2">
                        Tipo IVA: &nbsp;
                        <select value={iva} onChange={(e) => setIva(e.target.value)}>
                            <option value="ivaInscripto">IVA Inscripto</option>
                            <option value="ivaExcento">IVA Excento</option>
                            <option value="monotributo">Monotributo</option>
                            <option value="consFinal">Cons Final</option>
                            className="form-control my-2"
                            type="text"
                            placeholder="Tipo IVA"
                            required
                        </select>
                    </label>

                    <input
                        value={iibb}
                        onChange={(e) => setIibb(e.target.value)}
                        className="form-control my-2"
                        type="text"
                        placeholder="Ingresos Brutos"
                        required
                    />
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </div>
        </form>
    );
};

