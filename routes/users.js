const router = require("express").Router()

router.get("/", (req, res) => {
  res.send("User page")
})

module.exports = router