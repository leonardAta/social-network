const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")


//register
router.post("/register", async (req, res) => {
  // const user = await new User({
  //   username: "Jackson",
  //   email: "jackson@gmail.com",
  //   password: "123456"
  // })
  // await user.save()
  // res.send("ok")

  
  try{
    //password generator
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //creation of a new user
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    })

    const user = await newUser.save()
    res.status(200).json(user)
  } catch(err) {
    console.log(err)
  }
})  

module.exports = router