import React, {Component} from 'react'; 
import Car1 from './Car1';
import MiniCards from './MiniCards';

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                 <Car1/>
                 <MiniCards/>
            </React.Fragment>
           
        );
    }
}
export default Home; 