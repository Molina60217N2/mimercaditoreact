import React, { Component } from "react";
import Slider from "react-slick";
import RightBlueArrow from '../assets/icons/flechaazulder.png';
import LeftBlueArrow from '../assets/icons/flechaazulizq.png';
import AddCarreta from '../assets/icons/addCarreta.png';
import ManteqAlm from '../assets/images/manteqAlmendra.png';
import MielJal from '../assets/images/MielChileJal.png';
import MielArb from '../assets/images/mielChileArbol.png';
import ChilePerro from '../assets/images/chilePerro.png';

class CardSlider4 extends Component {
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
        const cards = this.props.cards;

        const cardsList = cards.map((card) =>
            <div className="slider-card">
                <div className="slider-card-image"><img src={card.image} className="" /></div>
                <p className="slider-card-title">{card.price}</p>
                <p className="slider-card-title">{card.title}</p>
                <p className="slider-card-description">{card.description}</p>
                <span className='d-flex justify-content-center'>
                    <a type="button" className="btnAgregar"><span><img src={AddCarreta} /></span></a>
                </span>
            </div>
        )
        return (
            <div className="cont">
                <Slider {...settings} className="cardSlider">
                    {cardsList}
                </Slider>
            </div>
        );
    }
}
export default CardSlider4;