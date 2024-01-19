const express = require("express");
const fs = require("fs");
const PORT = 3000;

const app = express();

app.get("/files", function (req, res) {
  fs.readdir(folderPath, function (err, files) {
    if (err) {
      res.status(500).send("Error reading folder: " + err.message);
      return;
    }

    const txtFiles = files.filter((file) => path.extname(file) === ".txt");
    res.json({ txtFiles });
  });
});

app.listen(PORT, function () {
  console.log("Server is live on port no : " + PORT);
});
