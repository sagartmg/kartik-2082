import { DataTypes } from "sequelize";
import sequelize from "../connections/database";

const Category = sequelize.define(
  "Category",
  {
    // id:
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parentId: {
      type: DataTypes.BIGINT,
      references: {
        model: "categories",
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
