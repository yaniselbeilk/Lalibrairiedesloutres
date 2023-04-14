console.log('Hello world!')

import express, { Express, Request, Response } from 'express';
import { connexion } from './controllers/connexion'
import { GetListSouhait } from './controllers/getlistsouhait'
import { CreateSouhait } from './controllers/createsouhait';
import { googleOauthHandler } from './controllers/auth-controller';

const bodyParser = require('body-parser');

const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

//URL pour la connexion MANUEL
app.post("/connexion", connexion);

//URL pour récupérer la liste de souhait d'un utilisateur
app.get("/list_souhait/:id", GetListSouhait);

//URL permettant a un utilisateur d'ajouter un souhait
app.post("/add_souhait", CreateSouhait);

//URL pour la connexion avec Google
app.get('/api/session/oauth/google', googleOauthHandler);

app.listen(port, () => {
  console.log("Server listening on :", port);
});