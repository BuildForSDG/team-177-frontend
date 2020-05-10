import React,{Component} from 'react';
import Navbar from '../Navbar/Navbar'
import About from '../About/about';
import ContactUs from '../ContactUs/contactUs';
import Services from '../services/Services';


class Home extends Component{
    render(){
        return(
            <div>
             <Navbar/>
             <About/>
             <Services/>
             <ContactUs/>
        
            </div>
           
        )
    }
}

export default Home;