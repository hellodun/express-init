const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users List");
});

router.get("/new", (req, res) => {
  res.send("New Users Form");
});

// NOTE: All dynamic routes should come after the static routes
// Dynamic routes are those with format e.g. /:id
// Get data
router.get("/:id", (req, res) => {
  res.send(`Get data for user: ${req.params.id}`);
});

// update data
router.put("/:id", (req, res) => {
  res.send(`Update data for user: ${req.params.id}`);
});

// Delete data
router.delete("/:id", (req, res) => {
  res.send(`Delete data for user: ${req.params.id}`);
});

// ----------- The above three routes are the same are the following ------------

/*
router.route("/:id").get((req, res) => {
  res.send(`Get data for user: ${req.params.id}`)
})
  .put((req, res) => {
    res.send(`Update data for user: ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete data for user: ${req.params.id}`);
  });

*/

// This is because the 3 functions have identical structure and the difference is the HTTP method, i.e. get, put, delete.
const users = [{ name: "John" }, { name: "Rose" }]
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next() // The next function is used with middlewares to prompt the program to continue executing once a middleware has been processed

  // Without the function next(), the program will load infinitely in the browser.
});


module.exports = router;