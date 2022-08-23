import React, {Component} from 'react' ;
import LangSel from './LangSel';
import {NavLink} from 'react-router-dom'; 
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MoneySel from './MoneySel';
class TopHeader extends Component{ 
    render(){
      
        return(
            <Navbar id='topHeader'>
            <Container  className='mx-xxl-0'>
              <Navbar>
                <LangSel/>
              </Navbar>
              <Navbar>
              <MoneySel/>
              </Navbar>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <a className='me-5 noDec'>
                  LISTA DE DESEOS
                </a>
                <a className='noDec'>
                  MIS ORDENES
                </a>
                <a className='ms-5 noDec acc'>
                  MI CUENTA
                </a>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}
export default TopHeader; 