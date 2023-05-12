import Facebook from "../../assets/facebook.png"
import Instagram from "../../assets/instagram.png"
import Whatsaap from "../../assets/whatsapp.png"
import Message from "../../assets/message.png"
import Phone from "../../assets/telephone.png"
import House from "../../assets/house.png"
import Calendar from "../../assets/calendar.png"

import "../Footer/Footer.css"
import { Component } from "react"
import BaseComponent from "bootstrap/js/dist/base-component"
import { PureComponent } from "react"

export const Footer = () => {

    return (

        <section className="pie_pagina">

            <div className="contacto">
                <a className="contacto_ref" name="contacto" href="./pages/contacto.html">Contacto:</a>
                <p><img className="message" src={Phone} alt="Icono Phone" />
                &nbsp; Contacto: +54 341 (15) 6121011</p>
                <p><img className="message" src={House} alt="Icono House" />
                &nbsp; Dirección: Mendoza 2626</p>
                <p><img className="message" src={Message} alt="Icono Message" />
                &nbsp; Mail: contacto@electroavenida.com</p>
            </div>

            <div>

                <iframe className="maps_google"
                    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.12534688777!2d-60.662573885206804!3d-32.947699879270694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab426221ddfd%3A0x40ac2532ea533e49!2sMendoza%202626%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1669205675950!5m2!1ses-419!2sar"}></iframe>
            </div>

            <div className="contacto">
                <p><img className="message" src={Calendar} alt="Icono Calendar" />
                &nbsp; Horarios:</p>
                <p>Lunes a Viernes de 9 a 12:30 y 15 a 18hs</p>
                <p>Sábados de 9 a 13hs</p>

            </div>
            <div className="redes_sociales">
                <a href={"http://www.facebook.com/"} target="_blank" rel="noreferrer noopener">
                    <img className="redes_sociales_icon" src={Facebook} alt="Icono de Facebook" /> </a>
                <a href={"https://instagram.com"} target="_blank" rel="noreferrer noopener">
                    <img className="redes_sociales_icon" src={Instagram} alt="Icono de Instagram" /> </a>
                <a href={"https://api.whatsapp.com/send/?phone=543416121011"} target="_blank" rel="noreferrer noopener">
                    <img className="redes_sociales_icon" src={Whatsaap} alt="Icono de Whatsapp" />
                </a>
            </div>
        </section>
    )
}


