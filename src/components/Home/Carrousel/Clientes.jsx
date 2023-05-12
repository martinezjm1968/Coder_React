import { Container, Row, Carousel } from 'react-bootstrap';
import Mayo from '../../../assets/Logos/Mayo.jpeg'
import GM from '../../../assets/Logos/GM.png'
import Ceva from '../../../assets/Logos/Ceva.png'
import Nautico from '../../../assets/Logos/Nautico.png'

export function Clientes() {
    return (
        <Container>
            <Row>
                <p>Algunos de nuestro clientes</p>
            </Row>
            <Row>
                <Carousel
                    interval={3000}
                    slide={true}
                    pause="hover"
                    controls={true}
                    indicators={true}
                    className="w-70 h-70"
                >
                    <Carousel.Item>
                        <img
                            className="d-block w-30"
                            src={GM} 
                            alt="GM Argentina"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-30"
                            src={Ceva}
                            alt="Ceva Logistics"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-30"
                            src={Nautico}
                            alt="Nautico Sportivo Avellaneda"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-30"
                            src={Mayo}
                            alt="Grupo Mayo"
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>

    );
}
