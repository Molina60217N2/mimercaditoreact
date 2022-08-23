import React, {Component} from 'react';
import { BrowserRouter ,Route, Routes, useParams } from 'react-router-dom'; 
import TopHeader from './components/TopHeader';
import Home from './components/Home'; 
import BlueBar from './components/BlueBar';

class Router extends Component{
    render(){
        return( //config de rutas

            <BrowserRouter>
                <TopHeader></TopHeader>
                <BlueBar/>
                <Routes>
                    <Route exact path = "/" element = {<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}
export default Router; 