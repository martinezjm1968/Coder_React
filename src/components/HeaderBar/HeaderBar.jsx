import imagenHeader from "../../assets/Banner-ventiladores.png";
import "../HeaderBar/HeaderBar.css"

export const HeaderBar = () => {

    return (
        <div className="Header">
            <a>
                <img className="ImgHeader" src={ imagenHeader } alt="imagen header" />
            </a>
        </div>
    )
}

