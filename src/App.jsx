import "./App.css";
import About from "./components/About";
import CoverLetter from "./components/CoverLetter";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyWorks from "./components/MyWorks";
import ReachMe from "./components/ReachMe";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div>
      <Hero />
      <CoverLetter />
      <About />
      <TechStack />
      <MyWorks />
      <ReachMe />
      <Footer />
    </div>
  );
}

export default App;
