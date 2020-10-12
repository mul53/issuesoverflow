require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const apiV1Router = require("./routes/v1");

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use("/api/v1", apiV1Router);
app.set("port", 3000);

app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
});
