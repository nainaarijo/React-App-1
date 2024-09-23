import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import HeroSection from './HeroSection';
import FooterSection from './FooterSection';
import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <HeroSection />
    <FooterSection />
  </React.StrictMode>
);


