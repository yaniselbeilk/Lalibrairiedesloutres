import { ListeSouhait } from '../models/db.js';

export async function GetListSouhait(req, res) {
  const souhaits = await ListeSouhait.findAll({ where: { utilisateur_id: req.params.id } });
  const souhaitsDisplay = souhaits.map((souhait) => {
    return {
      "livre_id": souhait.dataValues.livre_id,
    }
  });
  res.send(souhaitsDisplay);
}