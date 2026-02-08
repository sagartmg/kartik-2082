import { Router } from "express";
import productController from "../../controllers/product";

import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// const upload = multer({ dest: 'uploads/' })

const router = Router();

router.get("/", productController.getSellerProducts);
router.post("/", upload.array("images[]", 12), productController.create);

export default router;
