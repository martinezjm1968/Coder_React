import { useEffect, useState } from "react"
import { pedirDatos } from "../components/helpers/PedirDatos"



export const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => setProductos(data))
            .catch((err) => alert(err))
            .finally(() => setLoading(false))
    }, [])

    return ({
        productos,
        loading
    })
}