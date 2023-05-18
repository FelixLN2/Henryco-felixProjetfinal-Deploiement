import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Accueil from './Accueil/Accueil.js'
// import Professeurs from './Professeurs/Professeurs.js'
// import Cours from './Cours/Cours.js'
import '../styles/Navbar.css'
// import logo from '../assets/logo.png';

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>



      {/* <div>


        <nav>

          <ul>

            <li>
              <img src={logo} className="App-logo" alt="logo" />
              <Link to={"./Accueil"}>Accueil</Link>
            </li>
            <li>
              <Link to="./Cours">Cours</Link>
            </li>
            <li>
              <Link to="./Professeurs">Professeurs</Link>
            </li>
          </ul>
        </nav>
      </div> */}

    </div>
  );


}

export default Navbar;