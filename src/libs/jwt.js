import jwt from "jsonwebtoken";
import environment from "../common/enviroment.js";

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      environment.token_secret,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if ( err ) reject( err );
        resolve( token );
      }
    );
  });
};
