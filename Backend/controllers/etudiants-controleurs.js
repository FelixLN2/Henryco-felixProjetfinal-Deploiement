const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const Etudiant = require("../models/etudiant");
const HttpErreur = require("../models/http-erreur");



let ETUDIANTS = [
  {
    id: "e1",
    nom: "sadf",
    prenom: "asdf",
    numAdmission: "451",
    courriel:"e1@gmail.com",
    profil:"Développement d’application",
    stage:{},
  },
  {
    id: "e2",
    nom: "fdsa",
    prenom: "fdsa",
    numAdmission: "2624",
    courriel:"e2@gmail.com",
    profil:" Réseau et sécurité",
    stage:{},
  },
];
const getEtudiants = async (requete, reponse, next) => {



  reponse.json({ etudiants: ETUDIANTS });
};
const getEtudiantById = async (requete, reponse, next) => {

  const etudiantId = requete.params.etudiantId;
  const etudiant = ETUDIANTS.filter((etudiant) => {
    return etudiant.id === etudiantId;
  });
  if (!etudiant) {
    return next(new HttpErreur("Aucun etudiant trouvé pour l'id fourni", 404));
  }

  reponse.json({ etudiant });
};

const creerEtudiants = async (requete, reponse, next) => {


  const { id, nom, prenom, numAdmission } = requete.body;
  console.log(requete.body);

  const nouvelEtudiant = {
    id,
    nom,
    prenom,
    numAdmission
  }

  ETUDIANTS.push(nouvelEtudiant);
  reponse.status(201).json({ etudiant: nouvelEtudiant });
};


const modifierEtudiant = (requete, reponse, next) => {
  const { nom, prenom } = requete.body;
  const etudiantId = requete.params.etudiantId;


  const etudiantModifie = { ...ETUDIANTS.find(etudiant => etudiant.id === etudiantId) };
  const indiceEtudiant = ETUDIANTS.findIndex(etudiant => etudiant.id === etudiantId);

  etudiantModifie.nom = nom;
  etudiantModifie.prenom = prenom;

  ETUDIANTS[indiceEtudiant] = etudiantModifie;

  reponse.status(200).json({ etudiant: etudiantModifie });

};


const supprimerEtudiant = (requete, reponse, next) => {

  const etudiantId = requete.params.etudiantId;
  console.log("etudiant : " + etudiantId + " supprimé");
  ETUDIANTS = ETUDIANTS.filter(etudiant => etudiant.id !== etudiantId);
  reponse.status(200).json({ message: "Etudiant supprimée" });

};


exports.creerEtudiants = creerEtudiants;
exports.getEtudiantById = getEtudiantById;
exports.getEtudiants = getEtudiants;
exports.modifierEtudiant = modifierEtudiant;
exports.supprimerEtudiant = supprimerEtudiant;
exports.ETUDIANTS = ETUDIANTS;