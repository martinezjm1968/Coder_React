import React, { useState, useEffect } from 'react';
import { useContext } from "react";
import { db } from "../Firebase/Config.js"
import { collection, query, getDocs, addDoc, updateDoc, doc, where } from "firebase/firestore"
import { AuthContext } from '../Context/AuthContext';
import "./AltaModifClientes.css"

export const AltaModifClientes = () => {
    const { user } = useContext(AuthContext)
    const userEmail = user.email;

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


    const validarCliente = async () => {

        // 1.- Armar una referencia (sync)
        const clientesRef = collection(db, "Clientes")
        const q = userEmail
            ? query(clientesRef, where("email", "==", userEmail))
            : clientesRef
        // 2.- Consumir esa referencia (async)
        const snapshot = await getDocs(q);

        console.log("Que tiene snapshot: " + snapshot.empty);


        // Me fijo si existe o no existe el cliente
        if (snapshot.empty) {

            console.log("El cliente NO existe!");
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

            console.log("El cliente existe!");
            // El cliente existe, actualizar los valores
            const cliente = snapshot.docs[0].data();
            console.log("Cliente: " +cliente);
            const clienteId = snapshot.docs[0].id;
            console.log("ClienteID: " +clienteId);
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
            console.log('Cliente actualizado:', clienteActualizado);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
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
                        placeholder="Nombre, Apellido/Razon Social"
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
                    <input
                        value={provincia}
                        onChange={(e) => setProvincia(e.target.value)}
                        className="form-control my-2"
                        type="text"
                        placeholder="Provincia"
                        required
                    />
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
                    <input
                        value={iva}
                        onChange={(e) => setIva(e.target.value)}
                        className="form-control my-2"
                        type="text"
                        placeholder="Tipo IVA"
                        required
                    />
                    <input
                        value={iibb}
                        onChange={(e) => setIibb(e.target.value)}
                        className="form-control my-2"
                        type="text"
                        placeholder="Ingresos Brutos)"
                        required
                    />
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </div>
        </form>
    );
};

