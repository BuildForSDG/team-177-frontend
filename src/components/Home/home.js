import React,{Component} from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../About/about';
import ContactUs from '../About/about';
import Services from '../services/Services';
import FirstSection from './section1';


class Home extends Component{
    render(){
        return(
            <div>
         <Navbar/>   
        <FirstSection/>
             
            </div>
           
        )
    }
}

export default Home;