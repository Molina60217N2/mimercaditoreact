import { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import { Container, NavLink, Nav, NavDropdown } from "react-bootstrap";

class WhiteBar extends Component{
    render(){
      const drop = ["Alimentos", "Bebidas", "Regalos Souvenirs", "Cuidado Personal", "Mujer-Accesorios", "Mujer-Ropa", "Mujer-Ropa deportiva", "Hombre-Accesorios", "Hombre-Ropa", "Hombre-Ropa deportiva", "Bebé-Accesorios", "Bebé-Cuidado personal", "Bebé-Ropa", "Arte", "Electrónica", "Hogar y Jardín", "Librería y literatura", "Música", "Instrumentos musicales", "Vehículo - Accesorios"]; 
      const listItems = drop.map((item) =>
        <NavDropdown.Item>{item}</NavDropdown.Item>
      )

        return(
            <Navbar >
      <Container className="whiteNav">
        {/*aqui va lo que tendra la navbar*/}
        <Nav className="me-auto">
        <NavLink>Inicio</NavLink>
        <NavDropdown title="Categorías" id="basic-nav-dropdown">
              
              {listItems}
              
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