import { Component } from "react";
import { Navbar, Container, Nav, NavDropdown, Form, Button, NavbarBrand } from "react-bootstrap";
import logoMerc from '../assets/images/logoMercadito1.png'
import Carreta from '../assets/images/carretaWhite.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class BlueBar extends Component{
    render(){
        return(
            <Navbar expand="lg" className="bluebar">
            <Container fluid>
                <NavbarBrand className="imgMerc d-xxl-inline-flex">
                    <img src= {logoMerc} className="logoMerc"/> 
                </NavbarBrand>
               
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="searcher"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                 
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    className="searchBar"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <Button variant="outline-success search">Search</Button>
                </Form>
                <NavbarBrand >
                  <div  className="carreta">
                  <label>Mi Carreta:</label>
                <img src= {Carreta}/> 
                <label>₡ 5 000.00</label>
                  </div>
                
              </NavbarBrand>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}
export default BlueBar;