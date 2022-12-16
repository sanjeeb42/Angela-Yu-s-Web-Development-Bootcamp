
const express = require("express");

const app = express();


//Location , & callbackfunction
app.get("/", function (request, response) {
  //   console.log(request);
  response.send("<h1>Hello Sanjeeb!</h1>");
});

app.get("/about", function (req, res) {
  res.send(
    "<h3>Hello,I am Sanjeeb</h3><h3>I am currently pursuing my B.Tech from NIT Silchar, CSE Dept.</h3><h3>I like to solve problems</h3>"
  );
});

app.get("/contact",function(req,res){
    res.send("Contact me at raisanjeeb42@gmail.com");
})


// Port and CallBack Function
app.listen(3000, function () {
  console.log("Server Listening at Port 3000");
});
