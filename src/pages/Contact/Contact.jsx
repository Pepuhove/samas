import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "../About/About.css";
function Contact() {
    return (
        <>
        <Header />
        <div className="container">
            <h1>Get in Touch</h1>
            <button onClick={() => window.location.href = 'tel:+1234567890'} style={{ fontSize: "16px" }}>CALL NOW</button>
            <p>Or email: artist@example.com</p>
            <form>
                {/* Contact form here */}
            </form>
            <img src="./public/img/my_spirit.jpg" alt="Fanuel the artist" />  
        </div>
        <Footer />
        </>
    );
}

export default Contact;
