import React, { useState, useContext } from 'react';


import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import { useHistory } from 'react-router-dom';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL
} from '../../shared/util/validators';
import '../../styles/FormulaireEtudiants.css';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

const FormulaireEtudiants = () => {
  const auth = useContext(AuthContext);
  const { error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      numAdmission: {
        value: '',
        isValid: false
      },
      nomComplet: {
        value: '',
        isValid: false
      },
      courriel: {
        value: '',
        isValid: false
      },
      profil: {
        value: '',
        isValid: false
      }

    },
    false
  );
  const history = useHistory();

  const etudiantSubmitHandler = async event => {
    event.preventDefault();
    console.log(formState.imputs);

    try {
      const reponseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/etudiants",
        "POST",
        JSON.stringify({
          numAdmission: formState.inputs.numAdmission.value,
          nomComplet: formState.inputs.nomComplet.value,
          couriel: formState.inputs.courriel.value,
          profil: formState.inputs.profil.value
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log(reponseData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="form" onSubmit={etudiantSubmitHandler}>
        <Input
          id="numAdmission"
          element="input"
          type="text"
          label="Numéro d'Admission"
          validators={[VALIDATOR_MINLENGTH(9)]}
          title="Numero Admission"
          errorText="Entrer un numero d'admission valide"
          onInput={inputHandler}
        />
        <Input
          id="nomComplet"
          element="input"
          type="text"
          label="Nom Complet"
          validators={[VALIDATOR_MINLENGTH(4)]}
          title="Nom Complet"
          errorText="Entrer votre nom complet"
          onInput={inputHandler}
        />
        <Input
          id="courriel"
          element="input"
          type="textarea"
          label="Courriel"
          validators={[VALIDATOR_EMAIL()]}
          title="Courriel"
          errorText="Entrer un courriel valide"
          onInput={inputHandler}
        />
        <Input
          id="profil"
          element="input"
          type="text"
          label="Profil"
          validators={[VALIDATOR_REQUIRE()]}
          title="Profil"
          errorText="Entrer un profil"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Ajouter Etudiant
        </Button>
      </form>
    </React.Fragment>
  )

};




// function FormulaireEtudiants({ adresseMethode }) {
//   const [saisieNumAdmission, setSaisieNumAdmission] = useState('');
//   const [saisieNom, setSaisieNom] = useState('');
//   const [saisiePrenom, setSaisiePrenom] = useState('');

//   const saisieNumAdmissionHandler = (event) => {
//     setSaisieNumAdmission(event.target.value);
//   };

//   const saisieNomHandler = (event) => {
//     setSaisieNom(event.target.value);
//   };
//   const saisiePrenomHandler = (event) => {
//     setSaisiePrenom(event.target.value);
//   };



//   function ajouterEtudiantHandler(event) {
//     event.preventDefault();

//     const donneesEtudiant = {
//       NumAdmission: saisieNumAdmission,
//       Nom: saisieNom,
//       Prenom: saisiePrenom,

//     };
//     if (saisieNumAdmission === "") {
//       alert("Veuillez entrer un Numero d'Admission")
//       return;
//     }
//     if (saisieNom === "") {
//       alert("Veuillez entrer un Nom")
//       return;
//     }
//     if (saisiePrenom === "") {
//       alert("Veuillez entrer un Prenom")
//       return;
//     }


//     adresseMethode(donneesEtudiant);
//     setSaisieNom('');
//     setSaisiePrenom('');
//     setSaisieNumAdmission('');


//   };



//   return (
//     <div className='nouvel_etudiant_control'>

//       <form onSubmit={ajouterEtudiantHandler}>
//         <div className='nouvel_etudiant__controls'>
//           <div className='nouvel_etudiant__control'>
//             <label>Numéro d'admission</label>
//             <input
//               type='text'
//               value={saisieNumAdmission}
//               onChange={saisieNumAdmissionHandler}
//             />
//           </div>
//           <div className='nouvel_etudiant__control'>
//             <label>Prénom</label>
//             <input
//               type='text'
//               value={saisiePrenom}
//               onChange={saisiePrenomHandler}
//             />
//           </div>
//           <div className='nouvel_etudiant__control'>
//             <label>Nom</label>
//             <input
//               type='text'
//               value={saisieNom}
//               onChange={saisieNomHandler}
//             />
//           </div>

//         </div>
//         <div className='nouvel_etudiant__actions'>
//           <button type='submit'>Appliquer</button>
//         </div>

//       </form>
//     </div>

//   );
// };
//<button type="button" onClick={props.onCancel}>Annuler</button>

export default FormulaireEtudiants;