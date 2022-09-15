import React, { Component } from 'react';
import Car1 from './Car1';
import MiniCards from './MiniCards';
import Title from './Title';
import CardSlider from './CardSlider';
import ImageBox from './ImageBox';
import ImageBox2 from './ImageBox2';
import { cards1, cards2, cards3, cards4 } from './Cards';
import CatCards from './CatCards';



class Home extends Component {

    render() {

        return (
            <React.Fragment>
                <Car1 />
                <MiniCards />
                <Title
                    title="PRODUCTOS DESTACADOS" />

                <CardSlider
                    cards={cards1}
                />
                <ImageBox />
                <Title
                    title="PRODUCTOS NUEVOS E INCREIBLES" />
                <CardSlider
                    cards={cards2}
                />
                <ImageBox2 />
                <Title
                    title="PRODUCTOS MAS POPULARES" />
                <CardSlider
                    cards={cards3}
                />
                <Title
                    title="EXPLORAR CATEGORÍAS" />
                {/* Aqui van las categorias (nuevas cards) */}
                <CatCards />
                <Title
                    title="PRODUCTOS CON DESCUENTO" />
                <CardSlider
                    cards={cards4}
                />



            </React.Fragment>
        );
    }
}
export default Home; 