import React, { Component } from "react";
import ReactCardSlider from "../dist/ReactCardSlider";

class CardSlider extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="cardSlider">
                    <ReactCardSlider slides={this.props.slides} />
                </div>
            </React.Fragment>
        );
    }
}
export default CardSlider;