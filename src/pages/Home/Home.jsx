import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import ThabangArtz from "../About/ThabangArtz";
import Footer from "../../components/Footer/Footer";



function Home(){
    return(
        <>
        <Header />
        <div className="home-intro">
            <h1>"Crafting Timeless Stories in Stone</h1>
            <h3>Where Vision and Passion Meet."</h3>
            <div className="glry-cln">
                 <a href="/gallery" className="btn">Explore My Gallery</a>
            </div>
        </div>
        <ThabangArtz />
        <Footer />
        </>
    );
}
export default Home;