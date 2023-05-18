const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const HttpErreur = require("../models/http-erreur");

let EMPLOYEURS = [
  {
    nom: "p1",
    prenom: "",
    courriel: "",
    telephone: "",
  },
];
const getEmployeurs = async (requete, reponse, next) => {

  reponse.json({ employeurs: EMPLOYEURS });
};
const getEmployeurById = async (requete, reponse, next) => {

  const employeurId = requete.params.employeurId;
  const employeur = EMPLOYEURS.filter((employeur) => {
    return employeur.id === employeurId;
  });
  if (!employeur) {
    return next(new HttpErreur("Aucun employeur trouvé pour l'id fourni", 404));
  }
  reponse.json({ employeur });
};

const creerEmployeur = async (requete, reponse, next) => {
  const {nom, prenom, courriel, telephone } = requete.body;
  console.log(requete.body);

  const nouveauEmployeur = {
    nom,
    prenom,
    courriel,
    telephone,
  }

  EMPLOYEURS.push(nouveauEmployeur);
  reponse.status(201).json({ employeur: nouveauEmployeur });
};

const modifierEmployeur = (requete, reponse, next) => {
  const { nom, prenom, courriel, telephone } = requete.body;
  const employeurId = requete.params.employeurId;


  const employeurModifie = { ...EMPLOYEURS.find(employeur => employeur.id === employeurId) };
  const indiceEmployeur = EMPLOYEURS.findIndex(employeur => employeur.id === employeurId);

  employeurModifie.nom = nom;
  employeurModifie.prenom = prenom;
  employeurModifie.courriel = courriel;
  employeurModifie.telephone = telephone

  EMPLOYEURS[indiceEmployeur] = employeurModifie;

  reponse.status(200).json({ employeur: employeurModifie });

};

const supprimerEmployeur = (requete, reponse, next) => {

  const employeurId = requete.params.employeurId;
  console.log("employeur : " + employeurId + " supprimé");
  EMPLOYEURS = EMPLOYEURS.filter(employeur => employeur.id !== employeurId);
  reponse.status(200).json({ message: "employeur supprimée" });


};
exports.creerEmployeur = creerEmployeur;
exports.getEmployeurs = getEmployeurs;
exports.getEmployeurById = getEmployeurById;
exports.supprimerEmployeur = supprimerEmployeur;
exports.modifierEmployeur = modifierEmployeur;
exports.EMPLOYEURS = EMPLOYEURS;
