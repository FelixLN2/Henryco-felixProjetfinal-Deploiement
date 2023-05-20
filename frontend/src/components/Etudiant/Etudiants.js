import React, { useState } from 'react';
// import '../../styles/Etudiants.css';
import FormulaireEtudiants from './FormulaireEtudiants.js'
import ListeEtudiants from './ListeEtudiants';



function Etudiants() {
    /*const Etudiants = (props) => {*/
    const [enEdition, setEnEdition] = useState('');
    const [etudiants, setEtudiants] = useState([
        {

            Num: '123456',
            Nom: 'Ouelle',
            Prenom: 'Jean',

        },
        {

            Num: '456789',
            Nom: 'Tupou',
            Prenom: 'Bernard',

        },
        {

            Num: '987654',
            Nom: 'Rouin',
            Prenom: 'Juliette',

        },
    ]);
    function ajouterEtudiants(newEtudiants) {
        setEtudiants(etudiants.concat(newEtudiants));
        console.log(etudiants);
    }

    /* const enregistrerEtudiantsHandler = (EtudiantsSaisie) => {
         const donneesEtudiants = {
         ...EtudiantsSaisie,
         id: Math.random().toString(),
         };
         props.onAddEtudiants(donneesEtudiants);
         
         setEnEdition(false);
         return [donneesEtudiants];
     };*/

    const debutEditionHandler = () => {
        setEnEdition(true);
    };

    const arretEditionHandler = () => {
        setEnEdition(false);
    };





    return (
        <div className='nouveau-etudiants'>

            {!enEdition && (
                <button onClick={debutEditionHandler}>Ajouter nouvel Etudiant</button>
            )}
            {enEdition && (
                <FormulaireEtudiants
                    //onSaveEtudiantsData={enregistrerEtudiantsHandler}
                    //onCancel={arretEditionHandler}
                    adresseMethode={ajouterEtudiants}
                />
            )}
            <h2>Etudiants</h2>
            <ListeEtudiants Etudiants={etudiants} />
        </div>
    );
};

export default Etudiants;
