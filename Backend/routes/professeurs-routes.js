const express = require("express");
const controleursProfesseurs = require("../controllers/professeurs-controleurs")
const router = express.Router();

router.post('/', controleursProfesseurs.creerProfesseur);
router.get("/", controleursProfesseurs.getProfesseur);
router.get("/:professeurId", controleursProfesseurs.getProfesseurById);
router.delete("/:professeurId", controleursProfesseurs.supprimerProfesseur)
router.patch("/:professeurId", controleursProfesseurs.modifierProfesseur);


module.exports = router;
