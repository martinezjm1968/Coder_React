import { HeaderBar } from '../HeaderBar/HeaderBar';
import { Carrousel } from './Carrousel/Carrousel'
import { Clientes } from './Carrousel/Clientes'
import "../Home/Home.css";


export const Home = () => {

    return (

        <div>
            <HeaderBar />

            <p></p>
            <div className="quienes">
                <h1> VF Ventiladores de Fábrica - Quienes somos?</h1>
                <p> VF Ventiladores de Fábrica es una empresa nacional situada en la ciudad de Rosario (Santa Fe).
                    Atendemos a clientes en todo el país y proveemos a empresas multinacionales, pymes, emprendimientos y hogares.
                    Nuestros ventiladores industriales poseen garantía de dos años de fábrica.
                    La garantía de nuestros productos se encuentra avalada con más de 30 años de presencia en el mercado nacional.

                </p>
            </div>
            <p></p>
            <Carrousel />
            <Clientes />
        </div>
    )
}
