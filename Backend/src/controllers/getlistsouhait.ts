import { ListeSouhait } from '../models/db';
import { Router, Request, Response } from 'express'

export async function GetListSouhait(req: Request, res: Response) {
  const souhaits = await ListeSouhait.findAll({ where: { utilisateur_id: req.params.id } });
  const souhaitsDisplay = souhaits.map((souhait) => {
    return {
      "livre_id": souhait.dataValues.livre_id,
    }
  });
  res.send(souhaitsDisplay);
}