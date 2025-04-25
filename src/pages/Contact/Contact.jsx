import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "../About/About.css";
import "./Contact.css";

function Contact() {
    return (
        <>
            <Header />
            <div className="no-name"></div>
                <div className="contact-info">
                    <h3>Get in Touch</h3>
               
                <div className="form">
                    <form>
                        <label htmlFor="fName">Your Name</label><br />
                        <input type="text" id="fName" name="fName" /><br />
                        
                        <label htmlFor="lName">Email</label><br />
                        <input type="text" id="lName" name="lName" /><br />
                        
                        <label htmlFor="message">Message</label><br />
                        <textarea id="message" name="message" rows="4" cols="50"></textarea><br />
                        
                        <input type="submit" value="Send" />
                    </form>
                </div>
                </div>
            <Footer />
        </>
    );
}

export default Contact;
