import { Router } from "express";

import authRoute from "./auth";
import productRoute from "./product";
import { checkAuthentication, checkSeller } from "../middlewares/auth";
import SellerRoutes from "./seller";
import Category from "../models/Category";
const router = Router();

router.use("/auth", authRoute);

router.use("/products", productRoute);

router.post("/categories", async (req, res, nex) => {
  let data = await Category.create({
    title: req.body.title,
    parentId: req.body.parentId,
  });
  res.send(data);
});
router.get("/categories", async (req, res, nex) => {
  let data = await Category.findAll();
  res.send(data);
});

// router.get("/dashbarod", checkAuthentication, () => {
//   // dashboard
// });
// router.use("/seller/product", checkAuthentication, productRoute);
// router.use("/seller/orders", checkAuthentication, productRoute);

router.use("/seller", checkAuthentication, checkSeller, SellerRoutes);

export default router;
