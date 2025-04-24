import React from "react";
import "./Gallery.css";
import galleryData from "./GalleryInfo";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


function Gallery() {
    return (
       <>
        <Header />
        <div className="glry-cntr">
           <div className="glry-ovly">
               <img src="./img/stone-4.avif" />
               <h2>Where Stone Meets Soul</h2>
               <p>
                   Welcome to my world of stone artistry, where raw, unyielding rock is transformed into timeless expressions of beauty, emotion, and meaning. 
                   Inspired by nature, culture, and the human experience, my sculptures are more than art—they are stories carved in stone, meant to resonate 
                   and endure through time.
               </p>
           </div>
           <h4>Sculpted pieces</h4>
           <div className="glry-grid">
                {galleryData.map((item, index) =>(
                     <div className="glry-prtfl" key={index}>
                     <img src={item.img} alt={item.alt} />
                     <a href="/about" className="btn unique-btn">Learn more</a> 
                 </div>
                ))}
           </div>
        </div>
        <Footer />
       </>
    );
}

export default Gallery;
