import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import HomePageSection from "./components/HomePageSection";


function App() {
  return (
     <Router>
        <Navbar/>
        <HeroSection/>
        <InfoSection/>
        <HomePageSection/>
     </Router>

     
  );
}

export default App;
