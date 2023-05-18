import { createContext, useState, useEffect } from "react"
import React from "react";

export const CotizacionDolar = createContext()

export const CotizacionDolarProvider = ({ children }) => {
    const [dolar, setDolar] = useState()

    useEffect(() => {
        fetch("https://api.bluelytics.com.ar/v2/latest")
            .then(respuesta => respuesta.json())
            .then((dolarOficial) => {
                setDolar(dolarOficial)
            })
            .catch(err => console.log("Error en API dolar: " + err))
    }, [])


    return (
        <CotizacionDolar.Provider value={{
            dolar,
            setDolar
        }}>
            {children}
        </CotizacionDolar.Provider>
    )
}