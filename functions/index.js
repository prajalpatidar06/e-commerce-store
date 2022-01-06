const functions = require("firebase-functions");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world it is starting of ecommerce project");
});

exports.api = functions.region("asia-east1").https.onRequest(app);
