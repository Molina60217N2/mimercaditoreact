import React, { Component } from "react";
import Slider from "react-slick";
import AddCarreta from '../assets/icons/addCarreta.png';
import MielArb from '../assets/images/mielChileArbol.png';
import Salsa from '../assets/images/salsaCatrina.png';
import Soap from '../assets/images/gelSoap.png';
import MielJal from '../assets/images/MielChileJal.png'; 

class CardSlider3 extends Component {
    render() {
        function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "block", background: "lightblue" }}
                    onClick={onClick}
                />
            );
        }

        function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div
                    className={className}
                    style={{ ...style, display: "block", background: "lightblue" }}
                    onClick={onClick}
                />
            );
        }
        const settings = {
            arrows: true,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />

        };
        return (
            <div className="cont">
                <Slider {...settings} className="cardSlider">
                    <div className="slider-card">
                        <div className="slider-card-image"><img src={Salsa} className="" /></div>
                        <p className="slider-card-title">₡2 500</p>
                        <p className="slider-card-title">Miel con Chile Árbol</p>
                        <p className="slider-card-description">Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante.</p>
                        <span className='d-flex justify-content-center'>
                            <a type="button" className="btnAgregar"><span><img src={AddCarreta} /></span></a>
                        </span>
                    </div>
                    <div className="slider-card">
                        <div className="slider-card-image"><img src={MielJal} className="" /></div>
                        <p className="slider-card-title">₡2 684</p>
                        <p className="slider-card-title">Miel con Chile Jalapeño</p>
                        <p className="slider-card-description">Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante.</p>
                        <span className='d-flex justify-content-center'>
                            <a type="button" className="btnAgregar"><span><img src={AddCarreta} /></span></a>
                        </span>
                    </div>
                    <div className="slider-card">
                        <div className="slider-card-image"><img src={Soap} className="" /></div>
                        <p className="slider-card-title">₡2 500</p>
                        <p className="slider-card-title">Mantequilla de Almendras</p>
                        <p className="slider-card-description">Envase de 70g - Sabor suave y delicado con toques almendrados.</p>
                        <span className='d-flex justify-content-center'>
                            <a type="button" className="btnAgregar"><span><img src={AddCarreta} /></span></a>
                        </span>
                    </div>
                    <div className="slider-card">
                        <div className="slider-card-image"><img src={MielJal} className="" /></div>
                        <p className="slider-card-title">₡2 500</p>
                        <p className="slider-card-title">Chile Perro</p>
                        <p className="slider-card-description">Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante.</p>
                        <span className='d-flex justify-content-center'>
                            <a type="button" className="btnAgregar"><span><img src={AddCarreta} /></span></a>
                        </span>
                    </div>
                    <div className="slider-card">
                        <div className="slider-card-image"><img src={MielArb} className="" /></div>
                        <p className="slider-card-title">₡2 500</p>
                        <p className="slider-card-title">Miel con Chile Árbol</p>
                        <p className="slider-card-description">Envase de 70g - Sabor suave y delicado con toques almendrados.</p>
                        <span className='d-flex justify-content-center'>
                            <a type="button" className="btnAgregar"><span><img src={AddCarreta} /></span></a>
                        </span>
                    </div>
                    <div className="slider-card">
                        <div className="slider-card-image"><img src={MielArb} className="" /></div>
                        <p className="slider-card-title">₡2 500</p>
                        <p className="slider-card-title">Miel con Chile Árbol</p>
                        <p className="slider-card-description">Envase de 70g - Sabor suave y delicado con toques almendrados.</p>
                        <span className='d-flex justify-content-center'>
                            <a type="button" className="btnAgregar"><span><img src={AddCarreta} /></span></a>
                        </span>
                    </div>


                </Slider>
            </div>
        );
    }
}
export default CardSlider3;