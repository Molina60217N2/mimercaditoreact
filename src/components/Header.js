import React, { Component } from "react";
import TopHeader from "./TopHeader";
import BlueBar from "./BlueBar";
import WhiteBar from "./WhiteBar";
class Header extends Component{
    render(){
        return(
            <React.Fragment>
                <TopHeader/>
                <BlueBar/>
                <WhiteBar/>
            </React.Fragment>
        );
    }
}
export default Header; 