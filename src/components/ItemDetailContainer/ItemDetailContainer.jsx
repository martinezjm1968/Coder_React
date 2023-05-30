import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetails } from "../ItemDetails/ItemDetails"
import { doc, getDoc } from "firebase/firestore"
import { db } from '../Firebase/Config'
import Loader from '../Loader/Loader'

import "../ItemListContainer/Items.css";



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
        <div className="contenedor_detail_itemlist">
            <div className="grid_detail_list">
                <div className="row_detail_list">
                    {
                        loading
                            ? <Loader />
                            : <ItemDetails item={item} />
                    }
                </div>
            </div>
        </div>
    )
}

