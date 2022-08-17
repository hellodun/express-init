const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.download("C:/Users/Dunco/Downloads/condo interior.jpg");
})

app.listen(8080, console.log("App listening on port 8080"));