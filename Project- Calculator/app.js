const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?appid=0241469a296732cd045aee131f96d1ea&q=Tinsukia,Assam&units=metric";
  https.get(url, function (response) {
    console.log(response);
  });
  res.send("Server us up and running");
});

app.listen(3000, function () {
  console.log("Server Running on Port 3000");
});
