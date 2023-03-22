import { ListeSouhait } from '../models/db.js';

export async function CreateSouhait(req, res) {
  await ListeSouhait.create({
    livre_id: req.body.livre_id,
    utilisateur_id: req.body.utilisateur_id
  }).then(function (item) {
    res.send({"success": "Ajout effecuté"})
  }).catch(function (err) {
    res.send({ "error": err });
  })
}