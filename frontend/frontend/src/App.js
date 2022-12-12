import React from 'react';
import './App.css';
import Navbar from './comp/navbar';
import Main  from './comp/main';
import Upload from './comp/upload';
import MostViewed from './comp/mostviewed';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="mainbody">
      <Navbar />
      <Main />
      <Upload />
      <MostViewed />
      </div>
    </Router>
  );
}

export default App;
