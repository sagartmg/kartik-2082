import { Router } from "express";

import authRoute from "./auth";
import productRoute from "./product";
import { checkAuthentication, checkSeller } from "../middlewares/auth";
import SellerRoutes from "./seller";
import Category from "../models/Category";
import { title } from "node:process";
import Cart from "../models/Cart";
import Product from "../models/Product";
import User from "../models/User";
import Order from "../models/Order";
import OrderItem from "../models/OrderItem";
const router = Router();
import crypto from "crypto";

router.use("/auth", authRoute);

router.use("/products", productRoute);

router.post("/carts", checkAuthentication, async (req, res, next) => {
  try {
    let existingCartItem = await Cart.findOne({
      where: {
        userId: req.user?.id,
        productId: req.body.productId,
      },
    });

    if (existingCartItem) {
      await existingCartItem.update({
        quantity: existingCartItem.getDataValue("quantity") + 1,
      });
    } else {
      let data = await Cart.create({
        userId: req.user?.id,
        productId: req.body.productId,
        quantity: 1,
      });
    }

    res.send({
      data: {
        msg: "cart updated",
      },
    });
  } catch (err) {
    next(err);
  }
});

router.put("/carts/:id", checkAuthentication, async (req, res, next) => {
  console.log(req.params.id);
  console.log(req.body.quantity);
  let cartId = req.params.id as unknown as number;
  // return;
  try {
    let existingCartItem = await Cart.findByPk(cartId);

    existingCartItem?.update({
      quantity: req.body.quantity,
    });

    // 404 in case not found

    res.send({
      data: {
        msg: "cart updated",
      },
    });
  } catch (err) {
    next(err);
  }
});

router.delete("/carts/:id", checkAuthentication, async (req, res, next) => {
  try {
    let cartId = req.params.id as unknown as number;

    let existingCartItem = await Cart.findByPk(cartId);

    if (existingCartItem) {
      await existingCartItem.destroy();
    } else {
      // 404
    }
    res.send({
      data: {
        msg: "cart updated",
      },
    });
  } catch (err) {
    next(err);
  }
});

router.get("/carts", checkAuthentication, async (req, res, next) => {
  try {
    let data = await Cart.findAll({
      include: {
        model: Product,
        as: "product",
        include: [
          {
            model: User,
            as: "seller",
            attributes: ["id", "firstName"],
          },
        ],
      },
      where: {
        userId: req.user?.id,
      },
    });

    res.send({
      data: data,
    });
  } catch (err) {
    next(err);
  }
});

interface OrderItem {
  productId: number;
  quantity: number;
}

const genEsewaSignature = (totalAmout: number, uuid: string) => {
  const message = `total_amount=${totalAmout},transaction_uuid=${uuid},product_code=EPAYTEST`;
  const hashInBase64 = crypto
    .createHmac("sha256", "8gBm/:&EnhH.1/q")
    .update(message)
    .digest("base64");

  return hashInBase64;
};

router.post("/orders", checkAuthentication, async (req, res, next) => {
  // apply db: transitions

  let reference = "ORD-" + new Date().getFullYear() + "-" + Date.now();
  let order = await Order.create({
    userId: req.user?.id,
    reference,
  });

  let orderItems: OrderItem[] = req.body.orderItems;

  let totalAmount = 0;

  for (const orderItem of orderItems) {
    let product = await Product.findByPk(orderItem.productId);

    let productPrice = product?.getDataValue("price");
    totalAmount += productPrice * orderItem.quantity;
    await OrderItem.create({
      orderId: order.getDataValue("id"),
      productId: orderItem.productId,
      quantity: orderItem.quantity,
      price: productPrice,
      productName: product?.getDataValue("title"),
      productDescription: product?.getDataValue("shortDescription"),
    });
  }

  res.send({
    data: order,
    esewa: {
      tax_amount: 0,
      total_amount: totalAmount,
      transaction_uuid: reference,
      product_code: "EPAYTEST",
      product_service_charge: 0,
      product_delivery_charge: 0,
      success_url: "https://localhost:3000/order/OrderItemREF/success",
      failure_url: "https://developer.esewa.com.np/failure",
      signed_field_names: "total_amount,transaction_uuid,product_code",
      signature: genEsewaSignature(totalAmount, reference),
    },
  });
});


// router.post("/orders/:reference",{

//   // https://rc.esewa.com.np/api/epay/transaction/status/?product_code=EPAYTEST&total_amount=100&transaction_uuid=123

//   // order.findOne({
//   //   referecen: reference
//   // })

//   // order.update({
//   //   payment_status:"done"
//   // })


// })

router.post("/categories", async (req, res, nex) => {
  let data = await Category.create({
    title: req.body.title,
    parentId: req.body.parentId,
  });
  res.send(data);
});

interface Category {
  id: number;
  title: string;
  parentId: number | null;
  childrens?: Category[];
}

router.get("/categories", async (req, res, nex) => {
  let data = (await Category.findAll({
    raw: true,
  })) as unknown as Category[];

  /* 
   {
            "id": 1,
            "title": "furniture",
            "parentId": null,
            "createdAt": "2026-02-06T02:42:40.578Z",
            "updatedAt": "2026-02-06T02:42:40.578Z"
        },
        {
            "id": 4,
            "title": "chair",
            "parentId": 1,
            "createdAt": "2026-02-06T02:43:04.793Z",
            "updatedAt": "2026-02-06T02:43:04.793Z"
        },
         */
  /* 
    let categories: any = [];
    data.forEach((cat) => {
      // @ts-ignore
      if (cat.parentId == null) {
        let childrens: any = [];
        data.forEach((childCat) => {
          // @ts-ignore
          if (childCat.parentId == cat.id) {

            childrens.push(childCat);
          }
        });
        // categories.push({ ...cat, childrens });
        categories.push({ ...cat, childrens });
      }
    });
   */

  const createTree = (parentId: number | null) => {
    let categories: Category[] = [];
    data.forEach((cat) => {
      if (cat.parentId == parentId) {
        let childrens = createTree(cat.id);
        categories.push({ ...cat, childrens });
      }
    });
    return categories;
  };

  let categories = createTree(null);

  res.send({
    data: categories,
  });
});

// router.get("/dashbarod", checkAuthentication, () => {
//   // dashboard
// });
// router.use("/seller/product", checkAuthentication, productRoute);
// router.use("/seller/orders", checkAuthentication, productRoute);

router.use("/seller", checkAuthentication, checkSeller, SellerRoutes);

export default router;
