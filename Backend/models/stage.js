const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stageSchema = new Schema({
    nomContact: { type: String, required: true },
    courriel: { type: String, required: true },
    nomEntreprise: { type: String, required: true },
    addresseEntreprise: { type: String, required: true },
    typeStage: { type: String, required: true },
    nbPosteDispo: { type: String, required: true },
    descriptionStage: { type: String, required: true },
    renumerationStage: { type: String, required: true },

    employeur: { type: mongoose.Types.ObjectId, required: true, ref: "Employeur" },
    etudiants: { type: mongoose.Types.ObjectId, required: true, ref: "Etudiant" }
  

});
module.exports = mongoose.model("Cours", stageSchema);
