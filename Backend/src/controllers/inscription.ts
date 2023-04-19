import { User } from '../models/db.js';
import { Request, Response } from 'express'
import bcrypt from 'bcrypt';

export async function inscription(req: Request, res: Response) {
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
        User.create({
          pseudo: req.body.pseudo,
          email: req.body.email,
          mot_de_passe: hash
        }).then(function (item) {
          res.send({
            "success": "Inscription effecuté",
            "utilisateur_id": item.toJSON().id
          })
        }).catch(function (err) {
          res.send({ "error": err });
        })
      })
      .catch(err => res.send({ "error": err.message }));

  } else {
    //Un compte existe déjà avec ce pseudo
    res.send({ "error": "Ce pseudo est déjà utilisé" });
  }
}