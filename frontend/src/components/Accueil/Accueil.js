import React, { useState } from 'react';
// import logo from '../../assets/logo.png';
import Navbar from '../Navbar'
import '../../styles/App.css';


function Accueil() {
const Annee = 2023;


  return (
    
    
    <div className="App">
      
      <body>
        <p>
        
Édition {(new Date().getFullYear())}<br />

Bienvenue sur le site des stages de fin d'études des
techniques de l'informatique du  Collège Montmorency!<br />

À la fin de leurs études,
les étudiants sont appelés à mettre en
pratique les compétences acquises durant le programme.<br />

Cela se fait grâce à la participation d'entreprises de la
région qui les accueillent afin de finaliser leurs
formations.<br />

Le Collège Montmorency
offre ainsi aux employeurs l'occasion d'obtenir une
main-d'œuvre compétente, tout en leur permettant de
participer à la formation finale des
étudiants.<br />

Le stage de fin d'études
est une expérience concrète permettant d'acquérir une
expérience professionnelle formatrice.<br />

Les étudiants terminent
la portion académique de leurs études en informatique
selon une des deux voies de sortie du programme:
Réseaux et sécurité informatique
Développement d'applications informatiques<br />

      </p>
     
      
      
      </body>
      
    </div>
  );
}

export default Accueil;
