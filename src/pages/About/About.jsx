import React from "react";
import "./About.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function About(){
    return(
        <>
        <Header />
        <div className="container">
        <h3>WHO IS FANUEL MUTEMASANGO</h3>
            <div className="text-info">
                <p>
                I am Fanuel Mutemesango, a South African of Shona descent, born in 1957 in Harare, Zimbabwe.
                My passion lies in creating abstract stone sculptures that challenge the observer, delving into the depth of emotions and the spirit of humanity.
                I hold a deep love for people and family, and my work reflects the joy and richness I find in the family spirit a value I cherish deeply.<br /> <br /> 
                As the leader of my tribe, I take pride in my role of resolving tribal issues and fostering unity within my community. 
                My art and my responsibilities are both rooted in my commitment to people and the connections that bind us together. <br />  <br /> <br /> <br />
                <a href="/contact" className="btn btn-link">Get in touch</a>    
​                </p>
                <img src="./public/img/my_spirit.jpg" alt="Fanuel the artist" />     
            </div>
        </div>
        <Footer />
        </>
    );
}
export default About;