import React from "react";
import PropTypes from "prop-types";

import "../../components/Card/Card.css";
import { Contador } from '../Contador/Contador';



let count = 0;


export function Card({ imageSource, title, cuerpo, stock, precio }) {

    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <img src={imageSource} alt="a wallpaper" className="card-img-top" />
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">
                    {cuerpo}
                </p>
                <a style={{ color: 'grey' }}> Stock actual: {stock}  </a>
                <p></p>
                <a> Precio Unitario: ${precio}  </a>
                <p></p>
                <a>
                    < Contador initialCount={count} stock={stock} />
                    {/*<button variant="primary"> Comprar </button> */}
                </a>

                <p></p>

                <a> SubTotal: ${count * precio}</a>
            </div>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    cuerpo: PropTypes.string,
    imageSource: PropTypes.string,
    stock: PropTypes.number,
    precio: PropTypes.number,
};

