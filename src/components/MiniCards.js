import React, { Component } from "react";
import Entrega from "../assets/icons/entrega.png";
import PagoElct from "../assets/icons/pagoElect.png";
import Regalo from "../assets/icons/regalo.png";
import Telefono from "../assets/icons/telefono.png";
import { Card, Button, Container, CardGroup } from "react-bootstrap";
class MiniCards extends Component {
    render() {
        return (
            <React.Fragment>
                {/*Rectangulo blanco donde se encuentran las cards*/}
                <CardGroup className="minicardscont">
                    <Card className="quitBord">
                        <Card.Body className="minicards">
                            <Card.Img variant="top" src={Entrega} className="icoCard" />
                            <div className="txtCont">
                            <div className="miniTitle">ENTREGA A DOMICILIO</div>
                            <div className="miniText">Entregamos sus compras  hasta la puerta de su casa u oficina.</div>
                            </div>
                            
                        </Card.Body>
                    </Card>
                    <Card className="quitBord">
                        <Card.Body className="minicards">
                            <Card.Img variant="top" src={PagoElct} className="icoCard" />
                            <div className="txtCont">
                            <div className="miniTitle">PAGO ELECTRÓNICOo</div>
                            <div className="miniText">Podés pagar directamente con tu tarjeta de crédito o débito.</div>
                            </div>
                            
                        </Card.Body>
                    </Card>
                    <Card className="quitBord">
                        <Card.Body className="minicards">
                            <Card.Img variant="top" src={Regalo} className="icoCard" />
                            <div className="txtCont">
                            <div className="miniTitle">PRODUCTOS NACIONALES</div>
                            <div className="miniText">Todos los productos en Mi Mercadito son hechos en Costa Rica.</div>
                            </div>
                            
                        </Card.Body>
                    </Card>
                    <Card className="quitBord">
                        <Card.Body className="minicards">
                            <Card.Img variant="top" src={Telefono} className="icoCard" />
                            <div className="txtCont">
                            <div className="miniTitle">SOPORTE TELEFÓNICO</div>
                            <div className="miniText">Escribirnos al 6128-1490 y con gusto te atenderemos.</div>
                            </div>
                            
                        </Card.Body>
                    </Card>
                    
                </CardGroup>
            </React.Fragment>
        );
    }
}
export default MiniCards; 