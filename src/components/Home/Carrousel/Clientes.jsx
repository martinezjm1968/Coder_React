import { Container, Row, Carousel } from 'react-bootstrap';
import Mayo from '../../../assets/Logos/Mayo.jpeg'
import GM from '../../../assets/Logos/GM.png'
import Ceva from '../../../assets/Logos/Ceva.png'
import Nautico from '../../../assets/Logos/Nautico.png'

export function Clientes() {
    return (
        <Carousel>
            <Carousel.Item interval={1500}>
                <div className="d-flex justify-content-center">
                    <img
                        className="img-fluid w-30"
                        src={GM}
                        alt="First slide"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <h5>General Motors</h5>
                    
                </div>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <div className="d-flex justify-content-center">
                    <img
                        className="img-fluid w-30"
                        src={Nautico}
                        alt="Second slide"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <h5>Club Náutico Sportivo Avellaneda</h5>
                    
                </div>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <div className="d-flex justify-content-center">
                    <img
                        className="img-fluid w-30"
                        src={Mayo}
                        alt="Third slide"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <h5>Grupo Mayo</h5>
                    
                </div>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <div className="d-flex justify-content-center">
                    <img
                        className="img-fluid w-30"
                        src={Ceva}
                        alt="Third slide"
                    />
                </div>
                <div className="d-flex justify-content-center">
                    <h5>Ceva Logistics</h5>
                    
                </div>
            </Carousel.Item>
        </Carousel>

    );
}
