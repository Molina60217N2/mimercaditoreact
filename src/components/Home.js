import React, { Component } from 'react';
import Car1 from './Car1';
import MiniCards from './MiniCards';
import Title from './Title';
import CardSlider from './CardSlider';
import ImageBox from './ImageBox';
import ImageBox2 from './ImageBox2';
import CardSlider2 from './CardSlider2';
import CardSlider3 from './CardSlider3';
import CardSlider4 from './CardSlider4';
import MielArb from '../assets/images/mielChileArbol.png';


class Home extends Component {

    render() {
        const cards = [
            {
                image:  MielArb ,
                title: "Miel con chile de arbol",
                price: "₡2 500",
                description: "Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante."
            },
            {
                image:  MielArb ,
                title: "Miel con chile de arbol",
                price: "₡2 500",
                description: "Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante."
            },
            {
                image:  MielArb ,
                title: "Miel con chile de arbol",
                price: "₡2 500",
                description: "Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante."
            },
            {
                image:  MielArb ,
                title: "Miel con chile de arbol",
                price: "₡2 500",
                description: "Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante."
            },
            {
                image:  MielArb ,
                title: "Miel con chile de arbol",
                price: "₡2 500",
                description: "Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante."
            },
            {
                image:  MielArb ,
                title: "Miel con chile de arbol",
                price: "₡2 500",
                description: "Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante."
            },

        ];
        return (
            <React.Fragment>
                <Car1 />
                <MiniCards />
                <Title
                    title="PRODUCTOS DESTACADOS" />

                <CardSlider />
                <ImageBox />
                <Title
                    title="PRODUCTOS NUEVOS E INCREIBLES" />
                <CardSlider2 />
                <ImageBox2 />
                <Title
                    title="PRODUCTOS MAS POPULARES" />
                <CardSlider3 />
                <Title
                    title="EXPLORAR CATEGORÍAS" />
                <CardSlider4
                    cards={cards}
                />



            </React.Fragment>
        );
    }
}
export default Home; 