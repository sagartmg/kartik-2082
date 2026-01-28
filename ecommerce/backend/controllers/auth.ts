// export const signup = () => {};
// export const login = () => {};

import authService from "../services/authService";

import { Request, Response, NextFunction } from "express";

const authController = {
  signup: async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user = await authService.signup(req);
      res.send(user);
    } catch (err) {
      console.log(err);
      res.status(500).send({});
    }
  },
  login: () => {},
};
export default authController;
