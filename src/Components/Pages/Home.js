import React, {Component} from 'react';
import Header from '../Common/Header';
import image from  '../Assets/Images/Pepper2.png';

import Services from '../Common/Services';
import Portofolio from '../Common/Portofolio';
import AboutDesc from '../Common/AboutDesc';
import Team from '../Common/Team';

class Home extends Component{
    render(){
        return(
            <div>
                <Header
                title = "Hello all!"
                subtitle = "It's nice to meet you"
                buttonText = "Contact Us"
                link ="/contact"
                showButton={true}
                image={image}
                />
                <Services />
                <Portofolio />
                <AboutDesc />
                <Team/>
            </div>
        );
    }
}

export default Home;