import { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import Img1 from '../assets/images/img1.png';
import Img2 from '../assets/images/img2.png';
import Img3 from '../assets/images/img3.png';

class Car1 extends Component{
    render(){
        return(
            <Carousel 
            showThumbs = {false}
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}>
                {/*repetir ese div con las otras imagenes*/}
                <div>
                    <img src={Img1} />
                </div>
                <div>
                    <img src={Img2} />
                </div>
                <div>
                    <img src={Img3} />
                </div>
                
            </Carousel>
        );
    }
}
export default Car1;