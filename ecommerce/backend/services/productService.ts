import { Request } from "express";
import Product from "../models/Product";
import User from "../models/User";
import Category from "../models/Category";
import { Op } from "sequelize";

const productService = {
  get: async (req: Request) => {
    let searchText: string = (req.query.q as string).trim() || "";

    return await Product.findAll({
      include: [
        {
          model: User,
          as: "seller",
          attributes: ["id", "email"],
        },
        {
          model: Category,
          as: "categories",
          attributes: ["id", "title"],
        },
      ],
      attributes: {
        exclude: ["userId", "updatedAt"],
      },
      // attributes: ["id","title",other fields....]
      where: {
        title: {
          [Op.iLike]: `%${searchText}%`,
        },
        price: {
          [Op.gte]: 0,
          [Op.lte]: 150,
        },
      },
    });
  },
  getSellerProducts: async (req: Request) => {
    return await Product.findAll({
      where: {
        userId: req.user?.id,
      },
    });
  },
  //   req, req.user req.isSeller
  create: async (req: Request) => {
    console.log(req.body.categoryIds);

    let product = await Product.create({
      title: req.body.title,
      price: req.body.price,
      userId: req.user?.id,
      stock: req.body.stock,
    });

    //  @ts-ignore
    await product.addCategories(req.body.categoryIds);

    return product;
  },
};

export default productService;
