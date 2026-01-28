import { Request } from "express";
import User from "../models/User";

// bcrypt

export default {
  signup: async (req: Request) => {
    return await User.create({
      firstName: "ram",
      lastName: "bdr",
      email: "ram@gmail.com",
      role: "buyer",
      password:"has pw"
    });
  },
};
