import React from "react";
import Stage from "./Stage";

import "../../styles/ListeStages.css";

function ListeStage({ Stages }) {
  console.log(Stages);
  return (
    <ul >
      {Stages.map((stage) => (
        <Stage
          key={stage.numAdmission}
          numAdmission={stage.numAdmission}
          nom={stage.nom}
          prenom={stage.prenom}
          courriel={stage.courriel}
          profil={stage.profil}

        />
      ))}

    </ul>
  );
}

export default ListeStage;
