const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const coursRoutes = require("./routes/cours-routes");
const etudiantsRoutes = require("./routes/etudiants-routes");
const professeursRoutes = require("./routes/professeurs-routes");

const HttpErreur = require("./models/http-erreur");

const app = express();

app.use(bodyParser.json());

app.use("/api/cours", coursRoutes);
app.use("/api/etudiants", etudiantsRoutes);
app.use("/api/professeurs", professeursRoutes);


app.use((requete, reponse, next) => {
  return next(new HttpErreur("Route non trouvée", 404));
});

app.use((error, requete, reponse, next) => {
  if (reponse.headerSent) {
    return next(error);
  }
  reponse.status(error.code || 500);
  reponse.json({
    message: error.message || "Une erreur inconnue est survenue",
  });
});

mongoose.connect("https://henryco-felixprojetfinal-deploiement.onrender.com"
).then(() => {
  app.listen(5000)
  console.log("Connexion à la base de données réussie")
}).catch(() => {
  console.log("Erreur lors de la connexion");
});

