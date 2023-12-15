const express = require("express");
const cors = require("cors");
const app = express();
const apiRoutes = require("./routes/api");

app.use(cors());

app.use(express.json());

app.use("/api", apiRoutes);

app.listen(3000, "localhost", function () {
  console.log("Servidor rodando na porta 3000.");
});
