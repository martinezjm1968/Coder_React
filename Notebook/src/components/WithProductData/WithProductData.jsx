import { useState, useEffect } from "react"
import { pedirDatos } from "../../components/PedirDatos/PedirDatos"



// recibe componente por parametro
export const withProductData = (Component) => {
    // crear otro componente que retorne el anterior
    // con la funcionalidad agregada
    const WithProductData = (props) => {
        const [productos, setProductos] = useState([])
        const [loading, setLoading] = useState(true)

        useEffect(() => {
            setLoading(true)
    
            pedirDatos()
                .then((data) => setProductos(data))
                .catch((err) => console.log(err))
                .finally(() => setLoading(false))
        }, [])

        return (
            <Component productos={productos} loading={loading} {...props}/>
        )
    }

    return WithProductData
}