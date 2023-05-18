import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import '../../styles/Coordonateur.css';


function Coordonateur({ Num, Nom, Prenom }) {



  return (
    <li key={id}>
      {id} <br />
      {Nom} {Prenom}<br />
      {courriel}<br />
      {telephone}<br />



    </li>
  )
}
//     nom: { type: String, required: true },
//     prenom: { type: String, required: true },
//     courriel: { type: String, required: true },
//     telephone: { type: String, required: true },
//Etudiants : {etudiants}<br />
export default Coordonateur;