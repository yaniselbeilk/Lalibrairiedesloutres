import express from 'express';
import bodyParser from 'body-parser';
import { connexion } from './app/controllers/connexion.js'
import { inscription } from './app/controllers/inscription.js';
import { GetListSouhait } from './app/controllers/getlistsouhait.js';
import { CreateSouhait } from './app/controllers/createsouhait.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

//URL pour la connexion MANUEL
app.post("/connexion", connexion);

//URL pour l'inscription MANUEL
app.post("/inscription", inscription);

//URL pour récupérer la liste de souhait d'un utilisateur
app.get("/GetListSouhait/:id", GetListSouhait);

//URL permettant a un utilisateur d'ajouter un souhait
app.post("/AddSouhait", CreateSouhait);

app.listen(port, () => {
  console.log("Server listening on :", port);
});

