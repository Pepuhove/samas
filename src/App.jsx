import React from "react";
import { Route, Routes } from "react-router-dom";   
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import CallNow from "./pages/CallNow/CallNow";




function App(){
  return (
    <>
        <Navbar />
        <div className="app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="call-now" element={<CallNow />} />
            </Routes>
        </div>
    </>
);
}
export default App;