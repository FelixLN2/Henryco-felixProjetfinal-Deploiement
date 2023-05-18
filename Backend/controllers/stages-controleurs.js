const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const Employeur = require("../models/employeur");
const EMPLOYEURS = require("../controllers/employeurs-controleurs");
const ETUDIANTS = require("./etudiants-controleurs");
const HttpErreur = require("../models/http-erreur");
const stage = require("../models/stage");



let STAGES = [
  {
    nomContact: "c1",
    courriel: "",
    nomEntreprise: "",
    addresseEntreprise: 0,
    typeStage: "",
    nbPosteDispo: "",
    descriptionStage: "",
    renumerationStage: "",
  },
];
const getStages = async (requete, reponse, next) => {
  reponse.json({ stages: STAGES });

};
const getStageById = async (requete, reponse, next) => {

  const stageId = requete.params.coursId;
  const stage = STAGES.filter((stage) => {
    return stage.id === stageId;
  });
  if (!stage) {
    return next(new HttpErreur("Aucun cours trouvé pour l'id fourni", 404));
  }
  reponse.json({ cours });
};

const creerStages = async (requete, reponse, next) => {

  const { nomContact, courriel, nomEntreprise, addresseEntreprise, typeStage, nbPosteDispo, professeur } = requete.body;
  console.log(requete.body);

  const nouveauStage = {
    nomContact,
    courriel,
    nomEntreprise,
    addresseEntreprise,
    typeStage,
    nbPosteDispo,
    descriptionStage,
    renumerationStage: "",
  }

  STAGES.push(nouveauStage);
  reponse.status(201).json({ cours: nouveauStage });
};
const modifierStage = (requete, reponse, next) => {
  const { nomContact, courriel, nomEntreprise, addresseEntreprise, typeStage, nbPosteDispo, descriptionStage,renumerationStage} = requete.body;
  const stageId = requete.params.stageId;


  const stageModifie = { ...STAGES.find(stage => stage.id === stageId) };
  const indiceStage = STAGES.findIndex(stage => stage.id === stageId);

  coursModifie.nomContact = nomContact;
  coursModifie.courriel = courriel;
  coursModifie.nomEntreprise = nomEntreprise;
  coursModifie.addresseEntreprise = addresseEntreprise
  coursModifie.typeStage = typeStage
  coursModifie.nbPosteDispo = nbPosteDispo
  coursModifie.descriptionStage = descriptionStage
  coursModifie.renumerationStage = renumerationStage

  STAGES[indiceStage] = stageModifie;

  reponse.status(200).json({ stage: stageModifie });

};


const supprimerStage = (requete, reponse, next) => {

  const stageId = requete.params.stageId;
  console.log("Stage : " + stageId + " supprimé");
  STAGES = COURS.filter(stage => stage.id !== stageId);
  reponse.status(200).json({ message: "Stage supprimée" });

};


const ajouterEtudiant = async (requete, reponse, next) => {
  const stageId = requete.params.stageId;
  const etudiantId = requete.params.etudiantId;

  const etudiant = ETUDIANTS.ETUDIANTS.filter((etudiant) => {
    return etudiant.id === etudiantId;
  });
  if (!etudiant) {
    return next(new HttpErreur("Aucun etudiant trouvé pour l'id fourni", 404));
  }


  const stageModifie = { ...COURS.find(stage => stage.id === stageId) };
  const indiceStage = COURS.findIndex(stage => stage.id === stageId);

  stageModifie.etudiants.push(etudiant);

  STAGES[indiceStage] = stageModifie;

  reponse.status(200).json({ stage: stageModifie });
};




exports.getStages = getStages;
exports.getStageById = getStageById;
exports.creerStages = creerStages;
exports.modifierStage = modifierStage;
exports.supprimerStage = supprimerStage;
exports.ajouterEtudiant = ajouterEtudiant;

