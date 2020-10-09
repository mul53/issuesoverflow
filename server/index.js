const express = require("express");

const apiV1Router = require("./routes/v1");

const app = express();

app.set("port", 3000);

app.use("/api/v1", apiV1Router);

app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get("port")}`);
});
