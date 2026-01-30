import { Router } from "express";
import { checkAuthentication } from "../middlewares/auth";

const router = Router();

router.get("/", (req, res) => {
  res.send("product fetched..");
});



router.post("/", checkAuthentication, (req, res) => {
  res.send("product create");
});



export default router;
