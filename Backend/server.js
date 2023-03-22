import express from 'express';
import bodyParser from 'body-parser';
import { connexion } from './app/controllers/connexion.js'
import { inscription } from './app/controllers/inscription.js';
import { GetListSouhait } from './app/controllers/getlistsouhait.js';
import { CreateSouhait } from './app/controllers/createsouhait.js';
import { DeleteAccount } from './app/controllers/deleteacount.js';
import { ModifyAccount } from './app/controllers/modifyaccount.js';
import { RemoveSouhait } from './app/controllers/removesouhait.js';

const app = express();
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

app.listen(port, () => {
  console.log("Server listening on :", port);
});

