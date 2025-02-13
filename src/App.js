import "./App.css";
import React, { useState, useEffect } from "react";

//importing components
import Popup from "./components/Body__Section/Popups/Popup";
import Hero from "./components/Hero__Section/Hero";
import CompTrust from "./components/Body__Section/CompTrust__Section/CompTrust";
import WhoWeAre from "./components/Body__Section/WhoWeAre__Section/WhoWeAre";
import ImpactReport from "./components/Body__Section/ImpactReport__Section/ImpactReport";
import OurPrograms from "./components/Body__Section/OurPrograms__Section/OurPrograms";
import OurInterest from "./components/Body__Section/OurInterest__Section/OurInterest";
// import Resources from "./components/Body__Section/Resources__Section/Resources";
import Testimonials from "./components/Body__Section/Testimonials__Section/Testimonials";
import Newsletter from "./components/Body__Section/NewsLetter__Section/Newsletter";
import Footer from "./components/Body__Section/Footer__Section/Footer";
import Nav from "./components/Hero__Section/Nav/Nav";
import OurTalent from "./components/Body__Section/Our_Talent/OurTalent";

function App() {
  const [showPopup, setshowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setshowPopup(true);
    }, 25000);
  }, [showPopup]);

  return (
    <div className="App">
      {showPopup ? <Popup /> : ""}
      <Nav />
      <Hero />
      <CompTrust />
      <WhoWeAre />
      <ImpactReport />
      <OurPrograms />
      <OurInterest />
      <OurTalent />
      {/* <Resources /> */}
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
