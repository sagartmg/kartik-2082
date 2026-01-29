import { Request } from "express";
import User from "../models/User";

import bcrypt from "bcrypt";

export default {
  signup: async (req: Request) => {
    let hashed = await bcrypt.hash(req.body.password, 10);
    return await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      role: req.body.role,
      password: hashed,
    });
  },
  login: async (req: Request) => {
    //  check if email exits
    //  fetch its hashed pass
    //  compare password
    let user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (user) {
      console.log(user);
      let pw = user.getDataValue("password")

      let userData = user.toJSON()
      console.log(userData.password);


      // comparey hashed password with req.body.password
      // also send jwt token ..  npm i jsonwebtoken

      return true;
    }

    return false;
  },
};
