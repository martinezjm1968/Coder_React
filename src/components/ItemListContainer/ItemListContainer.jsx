import { useEffect } from 'react';
import { useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { pedirDatos } from '../helpers/PedirDatos.js';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()
    console.log(categoriaId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => {
                if (!categoriaId) {
                    setProductos(data)
                } else {
                    setProductos( data.filter((el) => el.categoria === categoriaId) )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoriaId])

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos}/>
            }
        </div>
    )
}



