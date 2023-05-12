import React from "react";
import { useEffect } from "react";
import { useState } from "react";



export const ApiDolarNav = ({props}) => {
    const [dolar, setDolar] = useState(null)

    useEffect(() => {
        fetch("https://api.bluelytics.com.ar/v2/latest")
            .then(respuesta => respuesta.json())
            .then((dolarBlue) => {
                setDolar(dolarBlue)
            })
            .catch(err => console.log(err))
    }, [])

    
    
    return (
        <div>
            {dolar &&
                <a style={{ fontSize: '10px' }}> Cotización Dólar: ${dolar.oficial.value_sell}  </a> 
            }
        </div>
    )
}