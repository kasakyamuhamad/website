import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import HowToApply from './components/HowToApply';
import TravelDocuments from './components/TravelDocuments';
import CheckStatus from './components/CheckStatus';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <HowToApply />
      <TravelDocuments />
      <CheckStatus />
      <ContactUs />
    </div>
  );
}

export default App;
