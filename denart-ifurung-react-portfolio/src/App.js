//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Interests from "./components/Interests";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ContactMe from './components/ContactMe';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contacts" element={<ContactMe />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
