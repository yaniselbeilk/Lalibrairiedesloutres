import { ListeSouhait } from '../models/db';
import { Request, Response } from 'express'

export async function CreateSouhait(req: Request, res: Response) {
  await ListeSouhait.create({
    livre_id: req.body.livre_id,
    utilisateur_id: req.body.utilisateur_id
  }).then(function (item) {
    res.send({"success": "Ajout effecuté"})
  }).catch(function (err) {
    res.send({ "error": err });
  })
}