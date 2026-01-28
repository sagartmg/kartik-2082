import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("product fetched..");
});

router.post("/", (req, res) => {
  res.send("product create");
});

export default router;
