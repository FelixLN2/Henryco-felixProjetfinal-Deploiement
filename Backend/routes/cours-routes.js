const express = require("express");
const controleursCours = require("../controllers/cours-controleurs")
const router = express.Router();

router.post('/', controleursCours.creerCours);
router.get('/', controleursCours.getCours);
router.get("/:coursId", controleursCours.getCoursById);
router.delete("/:coursId", controleursCours.supprimerCours);
router.patch("/:coursId", controleursCours.modifierCours);
router.patch("/:coursId/ajouterProf/:professeurId", controleursCours.ajouterProf);
router.patch("/:coursId/ajouterEtud/:etudiantId", controleursCours.ajouterEtudiant);



module.exports = router;
