import { useEffect, useState } from "react"
import { pedirDatos } from "../helpers/PedirDatos.js"
import { useParams } from "react-router-dom"
import { ItemDetails } from "../ItemDetails/ItemDetails"



export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()
    console.log("ItemId: " + itemId)
    console.log("Item: " + item)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => setItem(data.find((el) => el.id === Number(itemId))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    loading
                        ? <h2>Cargando...</h2>
                        : <ItemDetails item={item} />
                }
            </div>
        </div>
    )
}

