const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeursSchema = new Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    courriel: { type: String, required: true },
    telephone: { type: String, required: true },
    
    employeurs: [{ type: mongoose.Types.ObjectId, required: true, ref: "stage" }]



});
module.exports = mongoose.model("Employeur", employeursSchema);
