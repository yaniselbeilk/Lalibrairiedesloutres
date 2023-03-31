import { ListeSouhait } from '../models/db.js';

export async function RemoveSouhait(req, res) {
  const Souhait = await ListeSouhait.findOne({
    where: {
      livre_id: req.body.livre_id,
      utilisateur_id: req.body.utilisateur_id
    }
  });
  await Souhait.destroy({}).then(function (item) {
    res.send({ "success": "Suppression du souhait effecuté" })
  }).catch(function (err) {
    res.send({ "error": err });
  })
}