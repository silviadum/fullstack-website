import React from 'react';
import './App.css';
import Navbar from './comp/navbar';
import Main  from './comp/main';
import Upload from './comp/upload';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="body">
      <Navbar />
      <Main />
      <Upload />
      </div>
    </Router>
  );
}

export default App;
