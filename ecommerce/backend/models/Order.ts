import { DataTypes } from "sequelize";
import sequelize from "../connections/database";

const Order = sequelize.define(
  "Order",
  {
    userId: {
      type: DataTypes.BIGINT,
      references: {
        model: "users",
        key: "id",
      },
      allowNull: false,
    },
    reference: {
      type: DataTypes.STRING, // ORD-26-RAX@#$@
      allowNull: false,
      unique: true,
    },
    // status: {
    //   type: DataTypes.ENUM,
    //   values: [
    //     "pending",
    //     "accepted",
    //     "processing",
    //     "shipping",
    //     "completed",
    //     "rejected",
    //     "cancelled",
    //   ],
    // },
    paymentStatus: {
      type: DataTypes.ENUM,
      values: ["pending", "done", "failed", "refund"],
      defaultValue: "pending",
    },
    buyerName: DataTypes.STRING,
    address: DataTypes.STRING,
    notes: DataTypes.STRING,
  },
  {
    tableName: "orders",
    underscored: true,
    timestamps: true,
  },
);

export default Order;
