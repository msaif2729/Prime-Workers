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
import AdminPanel from './Components/Admin/AdminPanel';
import DataState from './Context/dataState';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Preloader from './Components/Preloader';

function App() {
  return (
    <BrowserRouter>
      <div className="App scroll-smooth">
        <div className="theme-light relative bg-[var(--bg)] overflow-hidden scroll-smooth">
          <ToastContainer
            position="bottom-right"
            autoClose={5000} // Auto close after 5 seconds
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" // Light or dark theme
          />
          <DataState>
            <Routes>
              <Route path="/prime-workers-admin/admin-panel/*" element={<AdminPanel />} />
              <Route
                path="/"
                element={
                  <>
                    <Preloader/>
                    <Navbar />
                    <Home />
                    <Service />
                    <About />
                    <Work />
                    <Contact />
                    <Footer />
                    
                  </>
                }
              />
            </Routes>
          </DataState>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
