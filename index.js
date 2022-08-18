const express = require("express");

const app = express();

app.use(logger); // By specifying our logger here, the logger will be used by all routes

app.set("view engine", "ejs");

// This implementation of logger will only be used by the home route i.e /, provided logger isn't specified elsewhere
app.get("/", logger, (req, res) => {
  res.render("index", {
    text: "From the server"
  });
});


const userRouter = require("./routes/users");
app.use("/users", userRouter);

// Custom middleware to log the visited route
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}


app.listen(8080, console.log("App listening on port 8080"));