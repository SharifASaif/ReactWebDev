import React, { Component } from "react";
import Header from '../Common/Header'
import TimeLine from '../Common/TimeLine'
import Team from '../Common/Team'
import image from '../assets/img/header-bg.jpg'

class About extends Component {
    render() {
        return (
            <div>
                <Header 
                    title="About Us"
                    subTitle="IT'S NICE TO MEET YOU"
                    showButton={false}
                    image={image}
                />
                <TimeLine />
                <Team />
             </div>
        );
    }
}
export default About;

