const express = require("express");
const app = express();

app.get("/health-chckup", function (req, res) {
  const kidneyId = req.query.kidneyId;
  const userName = req.headers.userName;
  const passWord = req.headers.passWord;

  if (userName != "Anish" || passWord != "jais") {
    res.status(403).json({
      msg: "user does not exist",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      msg: "wrong input",
    });
    return;
  }
});

res.send("works fine");

app.listen(3000, function () {
  console.log("website is active on port no 3000");
});
