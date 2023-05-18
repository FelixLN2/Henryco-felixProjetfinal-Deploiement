import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import logo from './logo.svg';
import '../styles/App.css';
import Accueil from './Accueil/Accueil.js';
import Navbar from './Navbar';
import Stages from './Stage/Stages.js'
import Footer from './Footer/Footer.js'

function App() {
  return (
    <div className="App">

      <Navbar />


      <Router>
        <Switch>
          <Route exact path="/" >
            <Accueil />
          </Route>
          <Route path="/page">

          </Route>
          <Route path="/Accueil" >
            <Accueil />
          </Route>
        </Switch>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
