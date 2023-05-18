const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const etudiantsSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    numAdmission: { type: String, required: true },
    courriel: { type: String, required: true },
    profil: { type: String, required: true },
    stage: [{ type: mongoose.Types.ObjectId, required: true, ref: "Stage" }]



});
module.exports = mongoose.model("Etudiant", etudiantsSchema);
