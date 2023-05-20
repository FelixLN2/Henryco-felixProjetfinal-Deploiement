import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";

// import Accueil from './Accueil/Accueil.js'
// import Professeurs from './Professeurs/Professeurs.js'
// import Cours from './Cours/Cours.js'
import '../styles/Navbar.css'
import logo from '../assets/logo.png';
import '../styles/App.css';

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div >



      <div className="App-header">


        <nav>

         
              <img src={logo} className="App-logo" alt="logo" /><br/>
              <NavLink to="./Accueil" className="NavLink">Accueil</NavLink>
            
              <NavLink to="./Stage" className="NavLink">Stage</NavLink>
            
              <NavLink to="./Etudiant" className="NavLink">Etudiant</NavLink>

              <NavLink to="./FAQ" className="NavLink">FAQ</NavLink>
              <hr ></hr>
        </nav>
        
      </div>

    </div>
  );


}

export default Navbar;