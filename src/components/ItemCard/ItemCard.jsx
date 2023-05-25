import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CotizacionDolar } from '../Context/CotizacionDolar';
import "../ItemListContainer/Items.css";

let count = 0;
let precioPesos = 0;
// const [props] = useState(item.precio);
export const ItemCard = ({ item }) => {

    const { dolar } = useContext(CotizacionDolar)

    precioPesos = dolar?.oficial.value_sell * item.precio;

    if (item) {
        return (
            <div className='row_list'>
                <div className="card text-center  animate__animated animate__fadeInUp">
                    <div className="overflow">
                        <img src={item.imageSource} className="card-img-top" alt={item.title} />
                    </div>
                    <div className="card-body text-light" >
                        <h4 style={{ color: 'black' }} className="card-title">{item.title}</h4>


                        <a style={{ color: 'black' }}> Stock actual: {item.stock}  </a>
                        <br />
                        <a style={{ fontSize: '16px', color: 'black' }}> Precio: u${item.precio}  </a>
                        <br />
                        <a style={{ fontSize: '16px', color: 'black' }}> Precio: ${(precioPesos).toLocaleString()}  </a>
                        <br />
                        {item.stock === 0 ? (
                            <p style={{ color: 'red' }}>¡Fuera de Stock!</p>
                        ) : (
                            item.stock <= 10 ? (
                                <p style={{ color: 'red' }}>¡Quedan pocas unidades!</p>
                            ) :
                                ""                            
                            )}
                        
                        <br />
                        {item.stock > 0 && <Link to={`/detail/${item.id}`} type="button" className="btn btn-danger"> Ver Más </Link>}


                    </div>
                </div>
            </div >
        )
    }
}

