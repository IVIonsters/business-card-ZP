/* eslint-disable no-unused-vars */
import React from 'react';
import Info from './components/Info/Info';
import About from './components/About/About';
import Interests from './components/Interests/Interests';
import './App.css';

function App() {
  return (
    <div className="card">
      <Info />
      <About />
      <Interests />
    </div>
  );
}

export default App;
