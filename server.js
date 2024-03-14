/* modules loading */
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

/* servers loading */
const app = express();
app.use(express.json());
app.use(cors());

/* Database connected */
const URL = process.env.MONGODB_URL;
mongoose
  .connect(URL, {
    /*
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true,
    */
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Connexion failed", err));

/* middlewares loading */
app.get("/", (req, res) => {
  console.log("Server is listening");
  res.send("Hello World!");
});

/* port loading */
const port = process.env.PORT;
app.listen(port, () => {
  console.log(" server is listening on port " + port);
});
