import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//import '../../styles/Etudiant.css';


function Etudiant({ numAdmission, nom, prenom, courriel, profil}) {



  return (
    <li key={numAdmission}>
      {numAdmission} <br />
      {nom} {prenom}<br />
      {courriel}<br />
      {profil}<br />
   

    </li>
  )
}

//     nom: { type: String, required: true },
//     prenom: { type: String, required: true },
//     noAdmission: { type: String, required: true },
//     courriel: { type: String, required: true },
//     profil: { type: String, required: true },
//     etudiants: [{ type: mongoose.Types.ObjectId, required: true, ref: "Stage" }]
//Etudiants : {etudiants}<br />
export default Etudiant;