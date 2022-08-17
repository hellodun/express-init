const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    text: "From the server"
  });
});


const userRouter = require("./routes/users");
app.use("/users", userRouter);


app.listen(8080, console.log("App listening on port 8080"));