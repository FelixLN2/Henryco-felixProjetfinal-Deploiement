import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import logo from './logo.svg';
import '../styles/App.css';
import Accueil from './Accueil/Accueil.js';
import Navbar from './Navbar';
import Stages from './Stage/Stages.js'
import Footer from './Footer/Footer.js'
import Etudiants from './Etudiant/Etudiants.js'
import FAQ from './FAQ/FAQ.js'
function App() {
  return (
    <div className="App">

      

      <Router>
      <Navbar />

        <Switch>
          <Route exact path="/" >
            <Accueil />
          </Route>
          <Route path="/page">

          </Route>
          <Route path="/Accueil" >
            <Accueil />
          </Route>
          <Route path="/Stage" >
            <Stages />
          </Route>
          <Route path="/Etudiant" >
            <Etudiants />
          </Route>
          <Route path="/FAQ" >
            <FAQ />
          </Route>
        </Switch>
        <Footer/>
      </Router>

      
    </div>
  );
}

export default App;
