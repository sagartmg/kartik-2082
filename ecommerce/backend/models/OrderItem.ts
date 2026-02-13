import { DataTypes } from "sequelize";
import sequelize from "../connections/database";

const OrderItem = sequelize.define(
  "OrderItem",
  {
    orderId: {
      type: DataTypes.BIGINT,
      references: {
        model: "orders",
        key: "id",
      },
      allowNull: false,
    },
    productId: {
      type: DataTypes.BIGINT,
      references: {
        model: "products",
        key: "id",
      },
      allowNull: false,
      onDelete: "SET NULL",
    },
    // snapshots
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM,
      values: [
        "pending",
        "accepted",
        "processing",
        "shipping",
        "completed",
        "rejected",
        "cancelled",
      ],
      defaultValue: "pending",
    },
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    tableName: "order_items",
    underscored: true,
    timestamps: true,
  },
);

export default OrderItem;
