import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Service from './Components/Service';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App scroll-smooth">
      <div className="theme-light bg-[var(--bg)] overflow-hidden scroll-smooth ">
        <Navbar />
        <Home />
        <Service/>
        <About/>
        <Work/>
        <Contact/>
        <Footer/>
      </div>  
  </div>
  );
}

export default App;
