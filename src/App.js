import "./App.css";

//importing components
import Hero from "./components/Hero__Section/Hero";
import WhoWeAre from "./components/Body__Section/WhoWeAre__Section/WhoWeAre";
import ImpactReport from "./components/Body__Section/ImpactReport__Section/ImpactReport";
import OurPrograms from "./components/Body__Section/OurPrograms__Section/OurPrograms";
import OurInterest from "./components/Body__Section/OurInterest__Section/OurInterest";
import Testimonials from "./components/Body__Section/Testimonials__Section/Testimonials";
import Footer from "./components/Body__Section/Footer__Section/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <WhoWeAre />
      <ImpactReport />
      <OurPrograms />
      <OurInterest />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
