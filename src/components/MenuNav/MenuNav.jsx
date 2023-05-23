import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoVF from '../../assets/VFGrande.png';
import { useContext } from "react";
import { CotizacionDolar } from '../Context/CotizacionDolar';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { LoginScreen } from "../LoginScreen/LoginScreen";


export function MenuNav() {
    const { dolar } = useContext(CotizacionDolar)
    const { user, logout } = useContext(AuthContext)

    return (
        <header className="header">
            <nav>
                <span style={{ fontSize: '10px' }}>Bienvenido {user.email} &nbsp;</span>
                {user.logged ?
                    <>
                        <button className='btn btn-danger' style={{ fontSize: '10px' }} onClick={logout}>Logout</button>
                    </>
                    :
                    <>

                        <Link className="btn btn-success" style={{ fontSize: '10px' }} to="/login">Login</Link>
                    </>

                }
            </nav>
            <Navbar bg="light" expand="lg" >
                <Container fluid>
                    <img style={{ width: '190px', height: '90px' }} src={logoVF} alt="logoVF" />
                    <Navbar.Brand ><Link to='/' style={{ color: 'black' }}>Home</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <NavDropdown title="Tienda" id="basic-nav-dropdown">
                                <NavDropdown.Item as='span'><Link to='/Tienda' style={{ color: 'black', textDecoration: 'none' }}>Tienda</Link></NavDropdown.Item>
                                <NavDropdown.Item as='span'><Link to='/Tienda/Pared' style={{ color: 'black', textDecoration: 'none' }}>Ventiladores Pared</Link></NavDropdown.Item>
                                <NavDropdown.Item as='span'><Link to='/Tienda/Pie' style={{ color: 'black', textDecoration: 'none' }}>Ventiladores Pie</Link></NavDropdown.Item>
                                <NavDropdown.Item as='span'><Link to='/Tienda/Techo' style={{ color: 'black', textDecoration: 'none' }}>Ventiladores Techo</Link></NavDropdown.Item>
                                <NavDropdown.Item as='span'><Link to='/Tienda/Calefon' style={{ color: 'black', textDecoration: 'none' }}>Calefones </Link></NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link as='span'><Link to='/Contacto' style={{ color: 'black', textDecoration: 'none' }}>Contacto</Link></Nav.Link>
                            
                        </Nav>


                        <Form className="d-flex">
                            <div>

                                <div>
                                    <span style={{ fontSize: '10px' }}> Cotización Dólar: ${dolar?.oficial.value_sell}  </span>
                                </div>

                                <div>
                                    {!user.logged ?
                                        <>
                                            <span style={{ fontSize: '10px' }}>Para acceder al carrito debe logearse primero!</span>
                                        </>
                                        : ""
                                    }
                                </div>
                                <CartWidget />
                            </div>

                        </Form>
                    </Navbar.Collapse>

                </Container>

            </Navbar >


        </header>
    );
}
