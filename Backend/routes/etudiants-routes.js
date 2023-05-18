const express = require("express");
const controleursEtudiants = require("../controllers/etudiants-controleurs")
const router = express.Router();

router.post('/', controleursEtudiants.creerEtudiants);
router.get('/', controleursEtudiants.getEtudiants);
router.get("/:etudiantId", controleursEtudiants.getEtudiantById);
router.delete("/:etudiantId", controleursEtudiants.supprimerEtudiant)
router.patch("/:etudiantId", controleursEtudiants.modifierEtudiant);



module.exports = router;
