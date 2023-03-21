import { User } from './app/models/db.js';
import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

// Initialize publication server
app.get("/", async (req, res) => {
  const users = await User.findAll();
  const usersDisplay = users.map((user) => {
    return {
      "user": user.dataValues.pseudo,
      "email": user.dataValues.email
    }
  });
  res.send(usersDisplay);
});

app.post("/connexion", async (req, res) => {
  const OneUser = await User.findOne({
    where: { pseudo: req.body.pseudo }
  })
  if (OneUser !== null) {
    console.log(OneUser.mot_de_passe)
    //On vérifie que le mot de passe soit correct
    bcrypt
      .compare(req.body.password, OneUser.mot_de_passe)
      .then(response => {
        if (response) {
          res.send({
            "user": {
              "id": OneUser.id,
              "pseudo": OneUser.pseudo
          } })
        } else {
          res.send({"error":"Mot de passe incorrect"})
        }
      })
      .catch(err => res.send({ "error": err.message }));
  } else {
    //Un compte existe déjà avec ce pseudo
    res.send({ "error": "Aucun compte lié à ce pseudo" });
  }
});

app.post("/inscription", async (req, res) => {
  const IfExistUser = await User.findOne({
    where: { pseudo: req.body.pseudo }
  })
  if (IfExistUser === null) {
    //Méthode de hashage du mot de passe
    bcrypt
      .genSalt(10)
      .then(salt => {
        return bcrypt.hash(req.body.password, salt)
      })
      .then(hash => {
        //Création du compte
        const user = User.create({
          pseudo: req.body.pseudo,
          mot_de_passe: hash
        })
        res.send({ "success" : "OK" });
      })
      .catch(err => res.send({ "error" : err.message }));

  } else {
    //Un compte existe déjà avec ce pseudo
    res.send({ "error": "Ce pseudo est déjà utilisé" });
  }
});

app.listen(port, () => {
  console.log("Server listening on :", port);
});

