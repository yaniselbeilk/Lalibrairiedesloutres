import { User } from '../models/db.js';
import bcrypt from 'bcrypt';

export async function connexion(req, res) {
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
            }
          })
        } else {
          res.send({ "error": "Mot de passe incorrect" })
        }
      })
      .catch(err => res.send({ "error": err.message }));
  } else {
    //Un compte existe déjà avec ce pseudo
    res.send({ "error": "Aucun compte lié à ce pseudo" });
  }
}