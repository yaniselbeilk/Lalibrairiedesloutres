console.log('Hello world!')

import express from 'express';
import { connexion } from './controllers/connexion'
import { GetListSouhait } from './controllers/getlistsouhait'
import { CreateSouhait } from './controllers/createsouhait';
import { googleOauthHandler } from './controllers/auth-controller';
import { DeleteAccount } from './controllers/deleteacount';
import { inscription } from './controllers/inscription';
import { ModifyAccount } from './controllers/modifyaccount';
import { RemoveSouhait } from './controllers/removesouhait';

const bodyParser = require('body-parser');

const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;


//URL pour la connexion MANUEL
app.post("/connexion", connexion);

//URL pour l'inscription MANUEL
app.post("/inscription", inscription);

//URL pour supprimer son compte
app.delete("/delete_account/:id", DeleteAccount)

//URL pour modifier son compte
app.patch("/modify_account/:id", ModifyAccount)

//URL pour récupérer la liste de souhait d'un utilisateur
app.get("/get_list_souhait/:id", GetListSouhait);

//URL permettant a un utilisateur d'ajouter un souhait
app.post("/add_souhait", CreateSouhait);

//URL permettant d'enlevé un souhait
app.delete("/remove_souhait", RemoveSouhait);

//URL pour la connexion avec Google
app.get('/api/session/oauth/google', googleOauthHandler);

app.listen(port, () => {
  console.log("Server listening on :", port);
});