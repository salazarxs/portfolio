import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Home />
      </>
    </Router>
  );
}

export default App;
