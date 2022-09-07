import { Component } from "react";
import AcMuj from '../assets/images/AccMujer.png';
import AcPer from '../assets/images/AccPerro.png';
class ImageBox2 extends Component {
    render() {
        return (
            <div className="imgCont">
                <div className="bigImage">
                    <img src={AcMuj} />
                    <img src={AcPer}/>
                </div>
            </div>
        );
    }
}
export default ImageBox2; 