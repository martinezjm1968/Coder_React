import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CotizacionDolar } from '../Context/CotizacionDolar';
import "./ItemCard.css";

let count = 0;
let precioPesos = 0;

export const ItemCard = ({ item }) => {
    const [props] = useState(item.precio);
    const { dolar, setDolar } = useContext(CotizacionDolar)

    precioPesos = dolar.oficial.value_sell * item.precio;

    if (item) {
        return (
            <div className='col-3 m-3'>
                <div className="card text-center bg-light animate__animated animate__fadeInUp">
                    <div className="overflow">
                        <img src={item.imageSource} alt="a wallpaper" className="card-img-top" />
                    </div>
                    <div className="card-body text-light" >
                        <h4 style={{ color: 'black' }} className="card-title">{item.title}</h4>


                        <a style={{ color: 'black' }}> Stock actual: {item.stock}  </a>
                        <br />
                        <a style={{ fontSize: '16px', color: 'black' }}> Precio: u${item.precio}  </a>
                        <br />
                        <a style={{ fontSize: '16px', color: 'black' }}> Precio: ${(precioPesos).toLocaleString()}  </a>
                        <br />
                        {item.stock <= 10 && <p style={{color: 'red'}}>¡Quedan pocas unidades!</p>}
                        <br />
                        <Link to={`/detail/${item.id}`} type="button" className="btn btn-danger"> Ver Más </Link>

                    </div>
                </div>
            </div >
        )
    }
}

