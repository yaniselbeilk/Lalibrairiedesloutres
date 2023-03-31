import { User, ListeSouhait } from '../models/db.js';

export async function DeleteAccount(req, res) {
  //Suppression de la liste de souhait associé
  const UserListSouhait = await ListeSouhait.findAll({ where: { utilisateur_id: req.params.id } });
  await UserListSouhait.forEach(UserSouhait => {
    UserSouhait.
      destroy({}).then(function (item) {
      console.log({ "success": "Suppression des souhaits effecuté" })
    }).catch(function (err) {
      console.log({ "error": err });
    })
  });
  //Suppresion du compte associé à l'id
  const DeleteUser = await User.findOne({
    where: { id: req.params.id }
  })
  await DeleteUser.destroy({}).then(function (item) {
    res.send({ "success": "Suppression du compte effecuté" })
  }).catch(function (err) {
    res.send({ "error": err });
  })
}