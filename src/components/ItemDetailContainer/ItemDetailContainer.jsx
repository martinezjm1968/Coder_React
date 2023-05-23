import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetails } from "../ItemDetails/ItemDetails"
import { doc, getDoc } from "firebase/firestore"
import { db } from '../Firebase/Config'



export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        // 1.- armo la referencia (sync)
        const docRef = doc(db, "items", itemId)
        // 2.- llamo a la ref (async)
        getDoc(docRef)
            .then((doc) => {
                const item = {
                    ...doc.data(),
                    id: doc.id
                }

                setItem(item)
            })
            .catch(e => alert(e))
            .finally(() => setLoading(false))
    }, [])


    return (
        <div className="container my-5">
            <div className="container d-flex justify-content-center align-items-center h-100">
                <div className="row">
                    {
                        loading
                            ? <h2>Cargando...</h2>
                            : <ItemDetails item={item} />
                    }
                </div>
            </div>
        </div>
    )
}

