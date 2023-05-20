import React from "react";
import Etudiant from "./Etudiant";

// import "../../styles/ListeEtudiants.css";

function ListeEtudiant({ Etudiants }) {
  console.log(Etudiants);
  return (
    <ul >
      {Etudiants.map((etudiant) => (
        <Etudiant
          key={etudiant.numAdmission}
          numAdmission={etudiant.numAdmission}
          nom={etudiant.nom}
          prenom={etudiant.prenom}
          courriel={etudiant.courriel}
          profil={etudiant.profil}

        />
      ))}

    </ul>
  );
}

export default ListeEtudiant;
