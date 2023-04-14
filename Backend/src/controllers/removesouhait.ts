import { ListeSouhait } from '../models/db.js';
import { Request, Response } from 'express'

export async function RemoveSouhait(req: Request, res: Response) {
  const Souhait = await ListeSouhait.findOne({
    where: {
      livre_id: req.body.livre_id,
      utilisateur_id: req.body.utilisateur_id
    }
  });
  if (Souhait!= null) {
    await Souhait.destroy({}).then(function (item) {
      res.send({ "success": "Suppression du souhait effecuté" })
    }).catch(function (err) {
      res.send({ "error": err });
    })
  }
}