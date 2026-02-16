import { Sequelize } from "sequelize";
import pg from "pg";  // <- explicitly import
// import { PostgresDialect } from '@sequelize/postgres';
const sequelize = new Sequelize(
  "postgresql://neondb_owner:npg_4DOdfnr7shBV@ep-raspy-paper-ai12ra4g-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  {
    // dialect: PostgresDialect,
    logging: false,
     dialectModule: pg,    // <- this fixes Vercel crashes
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
