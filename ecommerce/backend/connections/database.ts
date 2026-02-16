import { Sequelize } from "sequelize";
import pg from "pg";  // <- explicitly import
import { PostgresDialect } from '@sequelize/postgres';
const sequelize = new Sequelize(
  "postgres://postgres:postgres@localhost:5436/postgres",
  {
    dialect: PostgresDialect,
    logging: false,
     // dialectModule: pg,    // <- this fixes Vercel crashes
  },
);

// export const checkDBConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     // await sequelize.sync();
//     // await sequelize.sync({ alter: true });
//     await sequelize.sync({ alter: true, force: true });
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// checkDBConnection();

// // iife
(async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync();
    await sequelize.sync({ alter: true });
    // await sequelize.sync({ alter: true, force: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default sequelize;
