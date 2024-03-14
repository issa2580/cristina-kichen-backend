/* modules loading */
const express = require("express");
const cors = require("cors");

/* servers loading */
const app = express();
app.use(express.json());
app.use(cors());

/* middlewares loading */
app.get("/", (req, res) => {
  console.log("Server is listening");
  res.send("Hello World!");
});

/* port loading */
const port = 5000;
app.listen(port, () => {
  console.log(" server is listening on port " + port);
});
