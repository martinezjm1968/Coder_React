import Carousel from 'react-bootstrap/Carousel';
import Venti27Pared from '../../../assets/ventilador_27_pared.png'
import Venti31Pie from '../../../assets/ventilador_31_pie.png'

export function Carrousel() {
  return (
      <Carousel>
        <Carousel.Item>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>VF Ventiladores Industriales</h3>
            <img src={Venti27Pared} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <h6>Ventiladores Industriales de alta potencia y gran caudal de aire. Garantía dos años de fábrica. 100% nacionales</h6>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3>Potencia inigualable</h3>
            <img src={Venti31Pie} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <h6>Apto para trabajar las 24hs por días de trabajo. Motores con doble ruleman y protector térmico</h6>
          </div>
        </Carousel.Item>
      </Carousel>
    
  );
}

