import React from 'react';
import Header from './components/header/Header';
import AboutUs from './components/about/AboutUs';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <React.Fragment>
    <div className="container-fluid">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  </React.Fragment>  
  );
}

export default App;
