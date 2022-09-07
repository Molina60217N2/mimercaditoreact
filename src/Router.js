import React, {Component} from 'react';
import { BrowserRouter ,Route, Routes, useParams } from 'react-router-dom'; 
import Header from './components/Header';
import Home from './components/Home'; 


class Router extends Component{
    render(){
        return( //config de rutas

            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route exact path = "/" element = {<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}
export default Router; 