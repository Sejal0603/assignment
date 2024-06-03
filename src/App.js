import React from 'react';

// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Header } from './pages/Header';
import { Home } from './pages/Main';
import './App.css';
import { Advantages } from './pages/Advantages';
import { Testimonial } from './pages/Testimonial';
import { Faq } from './pages/Faq';
import { Footer } from './pages/footer';
import { Footer2 } from './pages/footer2';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About Us/>} />
          <Route path="/pricing" element={<Pricing/>} />
          
        </Routes>
      </Router> */}
      <Home/>
      <Advantages/>
      <Testimonial />
      <Faq/>
      <Footer />
      <Footer2/>
    </div>
  );
}

export default App;
