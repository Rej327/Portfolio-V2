import "./App.css";
import About from "./components/About";
import CoverLetter from "./components/CoverLetter";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div>
      <Hero />
      <CoverLetter />
      <About />
      <TechStack />
    </div>
  );
}

export default App;
