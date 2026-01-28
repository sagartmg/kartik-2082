import express from "express";
import appRoutes from "./routes";
import "./connections/database";

const app = express();
app.use("/api", appRoutes);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(3000, () => {
  console.log("server started");
});
