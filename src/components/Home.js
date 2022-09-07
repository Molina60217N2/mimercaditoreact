import React, {Component} from 'react'; 
import Car1 from './Car1';
import MiniCards from './MiniCards';
import Title from './Title';
import CardSlider from './CardSlider';
import ImageBox from './ImageBox';
import ImageBox2 from './ImageBox2';
import ManteqAlm from '../assets/images/manteqAlmendra.png';
import MielJal from '../assets/images/MielChileJal.png';
import MielArb from '../assets/images/mielChileArbol.png';
import ChilePerro from '../assets/images/chilePerro.png';

class Home extends Component{
    render(){
        const slides1 = [
            { image: MielArb, title: "Miel con Chile de Árbol", description: "Envase de vidrio 70g - Sabor suave y delicado con toques almendrados." },
            { image: MielJal, title: "Miel con Chile Jalapeño", description: "Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante." },
            { image: ManteqAlm, title: "Mantequilla de Almendras", description: "Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante." },
            { image: ChilePerro, title: "Chile Perro", description: "Envase de vidrio 300g - Sabor fresco con un toque de acidez y picante." },
            { image: "https://picsum.photos/200/300", title: "This is a fifth title", description: "This is a fifth description" },
            { image: "https://picsum.photos/800/700", title: "This is a sixth title", description: "This is a sixth description" },
            { image: "https://picsum.photos/300/400", title: "This is a seventh title", description: "This is a seventh description" },
        ];
        return(
            <React.Fragment>
                 <Car1/>
                 <MiniCards/>
                 <Title
                 title = "PRODUCTOS DESTACADOS"/>
                  
                 <CardSlider 
                 slides= {slides1}/>
                 <ImageBox/>
                 <Title
                 title = "PRODUCTOS NUEVOS E INCREIBLES"/>
                 <CardSlider 
                 slides= {slides1}/>
                 <ImageBox2/>  
                 <Title
                 title = "PRODUCTOS MAS POPULARES"/>
                 <CardSlider 
                 slides= {slides1}/>

            </React.Fragment>
        );
    }
}
export default Home; 