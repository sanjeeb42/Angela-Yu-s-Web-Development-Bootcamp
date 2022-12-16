const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  //   res.send("Thanks for Posting");

  //We can tap the value using req.body.number1
  var num1 = Number(req.body.height);
  var num2 = Number(req.body.weight); // n1 && n2 are from index.html file

  var result = num1 / (num2*num2);
  res.send("The BMI is : " + result);
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
