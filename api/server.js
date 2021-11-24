const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(3001, () => console.log("Servidor escuchando el puerto 3001"));
