import imagen1 from '../../assets/ventilador_31_pie.png';
import imagen2 from '../../assets/ventilador_27_pared.png';
import imagen3 from '../../assets/Ventilador_20_pared.png';
import imagen4 from '../../assets/Ventilador_20_pie.png';
import imagen5 from '../../assets/Ventilador_Techo_Chapa.png';
import imagen6 from '../../assets/Ventilador_Techo_Madera.png';
import imagen7 from '../../assets/Calefon-electrico-25-litros.png';

export const MOCK_DATA = [
    {
        id: 1,
        title: 'Ventilador 31" Pared',
        cuerpo: 'Ventilador de 31" de Pared. Motor WEG con doble ruleman y protector térmico. Caudal de aire 14m. Medidas caja 80x80x36cm',
        imageSource: imagen2,
        stock: 100,
        precio: 245,
        categoria: 'Pared',
    },
    {
        id: 2,
        title: 'Ventilador 31" Pie',
        cuerpo: 'Ventilador de 31" de Pie. Motor WEG con doble ruleman y protector térmico. Caudal de aire 14m. Medidas caja 80x80x36cm',
        imageSource: imagen1,
        stock: 10,
        precio: 290,
        categoria: 'Pie',
    },
    {
        id: 3,
        title: 'Ventilador 27" Pared',
        cuerpo: 'Ventilador de 27" de Pared. Motor WEG con doble ruleman y protector térmico. Caudal de aire 12m. Medidas caja 70x70x36cm',
        imageSource: imagen2,
        stock: 3,
        precio: 210,
        categoria: 'Pared',
    },
    {
        id: 4,
        title: 'Ventilador 27" Pie',
        cuerpo: 'Ventilador de 27" de Pie. Motor WEG con doble ruleman y protector térmico. Caudal de aire 12m. Medidas caja 70x70x36cm',
        imageSource: imagen1,
        stock: 150,
        precio: 250,
        categoria: 'Pie',
    },
    {
        id: 5,
        title: 'Ventilador 20" Pared',
        cuerpo: 'Ventilador de 20" de Pared. Motor WEG con doble ruleman y protector térmico. Caudal de aire 10m. Medidas caja 51x51x36cm',
        imageSource: imagen3,
        stock: 200,
        precio: 165,
        categoria: 'Pared',
    },
    {
        id: 6,
        title: 'Ventilador 20" Pie',
        cuerpo: 'Ventilador de 20" de Pie. Motor WEG con doble ruleman y protector térmico. Caudal de aire 10m. Medidas caja 51x51x36cm',
        imageSource: imagen4,
        stock: 300,
        precio: 185,
        categoria: 'Pie',
    },
    {
        id: 7,
        title: 'Ventilador Techo Chapa',
        cuerpo: 'Ventilador de Techo palas de chapa (Negro, Blanco o Marrón).',
        imageSource: imagen5,
        stock: 90,
        precio: 155,
        categoria: 'Techo',
    },
    {
        id: 8,
        title: 'Ventilador Techo Madera',
        cuerpo: 'Ventilador de Techo palas de madera con herrajes dorados',
        imageSource: imagen6,
        stock: 40,
        precio: 165,
        categoria: 'Techo',
    },
    {
        id: 9,
        title: 'Calefon Eléctrico Al',
        cuerpo: 'Calefón eléctrico 25L con resistencia de aluminio',
        imageSource: imagen7,
        stock: 4000,
        precio: 13,
        categoria: 'Calefon',
    },
    {
        id: 10,
        title: 'Calefon Eléctrico Br',
        cuerpo: 'Calefón eléctrico 25L con resistencia de bronce',
        imageSource: imagen7,
        stock: 3000,
        precio: 18,
        categoria: 'Calefon',
    },
];
