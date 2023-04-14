import { User } from '../models/db.js';

export const findAndUpdateUser = async (
  identifier: { email: string; },
  data: { name?: string; email: any }
) => {
  const VerifUser = await User.findOne({ where: { email: identifier.email } });
  if (VerifUser===null) {
    return await User.create({
      email: data.email,
    })
  } else {
    return await VerifUser.update({
      email: data.email,
    })
  }
};
