import { Router } from "express";

import authRoute from "./auth";
import productRoute from "./product";
import { checkAuthentication } from "../middlewares/auth";

const router = Router();

router.use("/auth", authRoute);

router.use("/products", productRoute);
router.get("/dashbarod", checkAuthentication, () => {
  // dashboard
});

export default router;
