const router = require("express").Router();
const {itemsSearch, searchByID} = require("../controllers/serch")

router.get("/", itemsSearch)
router.get("/:id", searchByID)



  module.exports = router