import React from "react";
import { Card } from "../Card/Card";

import imagen1 from "../../assets/ventilador_31_pie.png";
import imagen2 from '../../assets/ventilador_27_pared.png';
import imagen3 from '../../assets/Ventilador_20_pared.png';
import imagen4 from '../../assets/Ventilador_20_pie.png';
import imagen5 from '../../assets/Ventilador_Techo_Chapa.png';
import imagen6 from '../../assets/Ventilador_Techo_Madera.png';

const cards = [
    {
        id: 1,
        title: 'Ventilador 31" Pared',
        cuerpo: 'Ventilador de 31" de Pared con doble ruleman y protector térmico',
        imageSource: imagen2,
        stock: 100,
        precio: 54200,
    },
    {
        id: 2,
        title: 'Ventilador 31" Pie',
        cuerpo: 'Ventilador de 31" de Pie con doble ruleman y protector térmico',
        imageSource: imagen1,
        stock: 10,
        precio: 63960,
    },
    {
        id: 3,
        title: 'Ventilador 27" Pared',
        cuerpo: 'Ventilador de 27" de Pared con doble ruleman y protector térmico',
        imageSource: imagen2,
        stock: 3,
        precio: 45700,
    },
    {
        id: 4,
        title: 'Ventilador 27" Pie',
        cuerpo: 'Ventilador 27" de Pie con doble ruleman y protector térmico',
        imageSource: imagen1,
        stock: 150,
        precio: 54200,
    },
    {
        id: 5,
        title: 'Ventilador 20" Pared',
        cuerpo: 'Ventilador de 20" de Pared con doble ruleman y protector térmico',
        imageSource: imagen3,
        stock: 200,
        precio: 35400,
    },
    {
        id: 6,
        title: 'Ventilador 20" Pie',
        cuerpo: 'Ventilador de 20" de Pie con doble ruleman y protector térmico',
        imageSource: imagen4,
        stock: 300,
        precio: 40000,
    },
    {
        id: 7,
        title: 'Ventilador Techo Chapa',
        cuerpo: 'Ventilador de Techo palas de chapa (Negro, Blanco o Marrón). Herrajes mismo color.',
        imageSource: imagen5,
        stock: 90,
        precio: 34000,
    },
    {
        id: 8,
        title: 'Ventilador Techo Madera',
        cuerpo: 'Ventilador de Techo palas de madera con herrajes dorados',
        imageSource: imagen6,
        stock: 40,
        precio: 37000,
    },
];

export function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {cards.map(({ imageSource, title, cuerpo, stock, precio, id }) => (
                    <div className="col-md-3" key={id}>
                        <Card imageSource={imageSource} title={title} cuerpo={cuerpo} stock={stock} precio={precio} />
                    </div>
                ))}
            </div>
        </div>
    );
}


