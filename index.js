const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

const app = express();

const port = process.env.PORT || 4040;

require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("url is running properly, Hello Guys how are you all ?");
});

app.listen(port, () => {
  console.log("servers is running properly on live  ", port);
});
