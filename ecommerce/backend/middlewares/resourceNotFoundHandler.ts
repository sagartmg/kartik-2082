import { Request, Response } from "express";

function resourceNotFoundHandler(_req: Request, res: Response) {
  res.status(404).send({
    msg: "resource not found",
  });
}

export default resourceNotFoundHandler;
