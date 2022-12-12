import React from 'react';
import './App.css';
import Navbar from './comp/navbar';
import Main  from './comp/main';
import Upload from './comp/upload';
import Mostviewed from './comp/mostviewed';
import Footer from './comp/footer';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="mainbody">
      <Navbar />
      <Main />
      <Upload />
      <Mostviewed />
      <Footer />
      </div>
    </Router>
  );
}

export default App;
