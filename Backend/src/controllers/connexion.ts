import { User } from '../models/db';
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

export async function connexion(req: Request, res: Response) {
  const OneUser = await User.findOne({
    where: { pseudo: req.body.pseudo }
  })
  if (OneUser !== null) {
    console.log(OneUser.get('mot_de_passe'))
    //On vérifie que le mot de passe soit correct
    bcrypt
      .compare(req.body.password, OneUser.getDataValue('mot_de_passe'))
      .then((response: any) => {
        if (response) {
          res.send({
            "user": {
              "id": OneUser.get("id"),
              "pseudo": OneUser.get("pseudo")
            }
          })
        } else {
          res.send({ "error": "Mot de passe incorrect" })
        }
      })
      .catch((err: { message: any; }) => res.send({ "error": err.message }));
  } else {
    //Un compte existe déjà avec ce pseudo
    res.send({ "error": "Aucun compte lié à ce pseudo" });
  }
}