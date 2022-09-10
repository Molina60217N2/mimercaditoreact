import React, { Component } from 'react';
import Car1 from './Car1';
import MiniCards from './MiniCards';
import Title from './Title';
import CardSlider from './CardSlider';
import ImageBox from './ImageBox';
import ImageBox2 from './ImageBox2';
import CardSlider2 from './CardSlider2';
import CardSlider3 from './CardSlider3';


class Home extends Component {
 

    render() {
       
        return (
            <React.Fragment>
                <Car1 />
                <MiniCards />
                <Title
                    title="PRODUCTOS DESTACADOS" />

                <CardSlider/>
                <ImageBox />
                <Title
                    title="PRODUCTOS NUEVOS E INCREIBLES" />
                <CardSlider2/>
                <ImageBox2 />
                <Title
                    title="PRODUCTOS MAS POPULARES" />
                <CardSlider3/>
                <Title
                    title="EXPLORAR CATEGORÍAS"/>
                

            </React.Fragment>
        );
    }
}
export default Home; 