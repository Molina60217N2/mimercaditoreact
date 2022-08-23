import { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Container, NavLink, Nav, NavDropdown } from "react-bootstrap";

class WhiteBar extends Component{
    render(){
        return(
            <Navbar >
      <Container className="whiteNav">
        {/*aqui va lo que tendra la navbar*/}
        <Nav className="me-auto">
        <NavLink>Inicio</NavLink>
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.2">
                Alimentos
              </NavDropdown.Item>
              <NavDropdown.Item>Bebida</NavDropdown.Item>
              <NavDropdown.Item>
                Regalos y Souvenirs
              </NavDropdown.Item>
              <NavDropdown.Item>
                Cuidado Personal
              </NavDropdown.Item>
              <NavDropdown.Item>
              Mujer - Accesorios
              </NavDropdown.Item>
              <NavDropdown.Item>
              Mujer - Ropa
              </NavDropdown.Item>
              <NavDropdown.Item>
              Mujer - Ropa deportiva
              </NavDropdown.Item>
              <NavDropdown.Item>
              Hombre - Accesorios
              </NavDropdown.Item>
              <NavDropdown.Item>
              Hombre - Ropa
              </NavDropdown.Item>
              <NavDropdown.Item>
              Hombre - Ropa deportiva
              </NavDropdown.Item>
              <NavDropdown.Item>
              Bebé - Accesorios
              </NavDropdown.Item>
              <NavDropdown.Item>
              Bebé - Cuidado personal
              </NavDropdown.Item>
              <NavDropdown.Item>
              Bebé - Ropa
              </NavDropdown.Item>
              <NavDropdown.Item>
              Arte 
              </NavDropdown.Item>
              <NavDropdown.Item>
              Electrónica
              </NavDropdown.Item>
              <NavDropdown.Item>
              Hogar y Jardín
              </NavDropdown.Item>
              <NavDropdown.Item>
              Librería y literatura
              </NavDropdown.Item>
              <NavDropdown.Item>
              Música
              </NavDropdown.Item>
              <NavDropdown.Item>
              Instrumentos musicales
              </NavDropdown.Item>
              <NavDropdown.Item>
              Vehículo – Accesorios
              </NavDropdown.Item>
            </NavDropdown>
        <NavLink>Tiendas</NavLink>
        <NavLink>Historia</NavLink>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
      </Container>
    </Navbar>
        );
    }
}
export default WhiteBar; 