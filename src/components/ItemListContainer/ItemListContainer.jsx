import { useEffect } from 'react';
import { useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../Firebase/Config'
//import "../ItemCard/ItemCard.css";

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()
    

    useEffect(() => {
        setLoading(true)

        // 1.- Armar una referencia (sync)
        const productosRef = collection(db, "items")
        const q = categoriaId
            ? query(productosRef, where("categoria", "==", categoriaId))
            : productosRef
        // 2.- Consumir esa referencia (async)
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(docs)
            })
            .catch(e => alert(e))
            .finally(() => setLoading(false))
    }, [categoriaId])

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos} />
            }
        </div>
    )
}




