import React,{Component} from 'react';
import Navbar from '../navbar/Navbar'
import About from '../about/About';
import ContactUs from '../contactUs/ContactUs';
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