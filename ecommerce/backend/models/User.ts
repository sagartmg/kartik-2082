import { DataTypes } from "sequelize";
import sequelize from "../connections/database";
import { BUYER, SELLER } from "../constants/role";

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM,
      values: [SELLER, BUYER],
      allowNull: false,
    },
    // TODO: add password field
  },
  {
    tableName: "users",
    underscored: true,
    timestamps: true,
  },
);

export default User;
