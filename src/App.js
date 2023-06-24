import React from 'react';
import Header from './components/header/Header';
import AboutUs from './components/about/AboutUs';
import Footer from './components/footer/Footer';
import './App.css';
import ProductControl from './components/productcontrol/ProductControl';

function App() {
  return (
    <React.Fragment>
    <div className="container-fluid">
      <Header />
     
      <ProductControl/>
      <AboutUs />
      <Footer />
    </div>
  </React.Fragment>  
  );
}

export default App;
