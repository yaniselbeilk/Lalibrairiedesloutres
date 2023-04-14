import { User } from '../models/db.js';
import { Request, Response } from 'express'

export async function ModifyAccount(req: Request, res: Response) {
  const VerifUser = await User.findOne({ where: { pseudo: req.body.pseudo } });
  //On vérifie d'abord qu'il n'y ait pas de profil le même pseudo
  if (VerifUser === null) {
    //Si c'est bon, on modifie le compte
    const DataUser = await User.findOne({ where: { id: req.params.id } });
    if (DataUser != null) {
      DataUser.update({
        pseudo: req.body.pseudo,
        email: req.body.email,
      }).then(function (item) {
        res.send({ "success": "Compte modifié" })
      }).catch(function (err) {
        res.send({ "error": err });
      })
    }
  } else {
    //Sinon, on retourne une erreur
    res.send({ "error": "Ce pseudo est déjà utilisé" });
  }
}