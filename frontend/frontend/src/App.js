import React from 'react';
import './App.css';
import Navbar from './comp/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Popup1 from './comp/navbar/popup/popup1';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="Main">
        <br></br>
        <br></br>
      </div>
    </Router>
  );
}

export default App;
