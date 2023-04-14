import { getGoogleOauthToken, getGoogleUser } from '../service/session.service';
import { findAndUpdateUser } from '../service/user.service';
import config from '../config/custom-environment-variables';
import { Request, Response } from 'express'

export const googleOauthHandler = async (
  req: Request,
  res: Response
) => {
  try {
    // Get the code from the query
    const code = req.query.code as string;
    const pathUrl = (req.query.state) || '/';

    if (!code) {
      return res.send({ code: 401, message: 'Authorization code not provided!' });
    }

    // Use the code to get the id and access tokens
    const { id_token, access_token } = await getGoogleOauthToken({ code });

    // Use the token to get the User
    const { name, verified_email, email, picture } = await getGoogleUser({
      id_token,
      access_token,
    });

    // Check if user is verified
    if (!verified_email) {
      return res.send({ code: 403, message: 'Google account not verified' });
    }

    // Update user if user already exist or create new user
    const user = await findAndUpdateUser(
      { email },
      {
        name,
        email
      }
    );

    if (!user)
      return res.redirect(`${config.origin}/oauth/error`);

    // res.redirect(`${config.origin}${pathUrl}`);
    console.log(config.frontOrigin+pathUrl)
    res.redirect("http://" + config.frontOrigin as string + "/connexion/"+user.get("id"));
  } catch (err) {
    console.log('Failed to authorize Google User', err);
    return res.redirect(`${config.origin}/oauth/error`);
  }
};
