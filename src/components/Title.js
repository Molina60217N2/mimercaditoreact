import React, { Component } from "react";
import Rayarosa from "../assets/images/rayarosa.png";

class Title extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="bigTitle">
                    {this.props.title}
                </div>
                <img className="rayarosa" src={Rayarosa}></img>

            </React.Fragment>
        );

    }
}
export default Title;