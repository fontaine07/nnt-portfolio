import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from "./pages/About/About"
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Work from './components/Work/Work';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
