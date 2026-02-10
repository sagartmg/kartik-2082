import { DataTypes } from "sequelize";
import sequelize from "../connections/database";

const Category = sequelize.define(
  "Category",
  {
    userId: {
      type: DataTypes.BIGINT,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    tableName: "categories",
    underscored: true,
    timestamps: true,
  },
);

export default Category;
