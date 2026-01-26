const express = require("express");
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5436/postgres",
  {
    logging: false,
  },
);

const checkDBconnection = async () => {
  try {
    await sequelize.authenticate();
    sequelize.sync({});
    // sequelize.sync({ alter: true });
    // sequelize.sync({ force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkDBconnection();

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: true,
    underscored: true,
    tableName: "users",
  },
);

const Todo = sequelize.define(
  "Todo",
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
  },
  {
    timestamps: true,
    underscored: true,
    tableName: "todos",
  },
);

Todo.belongsTo(User, {
  foreignKey: "created_by",
  as: "user",
});

User.hasMany(Todo, {
  foreignKey: "created_by",
  as: "todos",
});

/* 
  Relationship
    one- one
    one-many
    many-many

*/

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // global middleware

app.get("/api/todos", async (req, res) => {
  let todos = await Todo.findAll({
    include: {
      model: User,
      as: "user",
    },
  });
  res.send(todos);
});

app.post("/api/todos", async (req, res) => {
  let todos = await Todo.create({
    title: req.body.title,
    description: req.body.description,
    created_by: req.body.created_by,
  });
  res.send(todos);
});

app.put("/api/todos/:id", async (req, res) => {
  let todo = await Todo.findByPk(req.params.id);

  todo = await todo.update({
    title: req.body.title,
    status: req.body.status,
  });
  res.send(todo);
});

app.delete("/api/todos/:id", async (req, res) => {
  let todo = await Todo.findByPk(req.params.id);
  todo = await todo.destroy();
  res.send(todo);
});

app.get("/api/users", async (req, res) => {
  let users = await User.findAll({
    include: {
      model: Todo,
      as: "todos",
      // required: true,
    },
  });
  res.send(users);
});

app.post("/api/users", async (req, res) => {
  // req.body.name
  try {
    let user = await User.create({
      name: req.body.name,
      email: req.body.email,
    });
    console.log(user);
    res.send(user);
  } catch (err) {
    console.log(err.name);
    console.log(err);
    res.status(500).send({
      msg: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
