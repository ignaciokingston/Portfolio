import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FicheProjet from './pages/FicheProjet';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


const root = createRoot(document.getElementById('root'));

root.render (
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/ficheprojets/:id" element= {<FicheProjet/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/contact" element= {<Contact/>}/>
        <Route path="/*" element= {<NotFound/>}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)

