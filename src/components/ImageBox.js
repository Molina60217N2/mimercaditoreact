import { Component } from "react";
import DescApp from '../assets/images/descApp.png';
import Little from '../assets/images/LitEnd.png';
import Saucy from '../assets/images/Saucy.png';
import Cerveza from '../assets/images/Cerveza.png';
const allImages = [Little, Saucy, Cerveza];
const images = allImages.map((image) =>
    <img src={image} />
);
class ImageBox extends Component {
    render() {
        return (
            <div className="imgCont">
                <div className="bigImage">
                    <img src={DescApp} />
                </div>
                <div className="smImages">
                    {images}
                </div>

            </div>
        );
    }
}
export default ImageBox; 