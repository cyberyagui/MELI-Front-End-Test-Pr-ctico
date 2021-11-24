const express = require("express")
const router = express.Router();
const search = require("./search.routes.js")

router.use("/items",search)

module.exports = router