import authService from "../services/authService";

import { Request, Response, NextFunction } from "express";

const authController = {
  signup: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await authService.signup(req);
      console.log({ user });
      res.send(user);
    } catch (err) {
      next(err);
    }
  },
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let matched = await authService.login(req);

      if (matched) {
        res.send({
          msg: "login successfull",
        });
      } else {
        res.status(401).send({
          msg: "invalid createndatinsl",
        });
      }
    } catch (err) {
      next(err);
    }
  },
};
export default authController;
