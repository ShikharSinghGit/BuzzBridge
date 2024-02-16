var express = require("express");
var bcrypt = require("bcrypt");
var router = express.Router();
var userModel = require("../public/javascripts/user");
var jwt = require('jsonwebtoken');

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, address, phone} =
      req.body;
    const userName = firstName + lastName;
    const hashedPassword = await bcrypt.hash(password, 10);
    if (hashedPassword && userName) {
      userModel.create({
        userName,
        email,
        password: hashedPassword,
        address,
        phone,
      });
    }
    res.send("respond with a resource");
  } catch (e) {
    console.log(e);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password} = req.body;
    const user = await userModel.findOne({email});
   // const isUserAuthenticated = await bcrypt.compare(password, user.password);
    if ( !user || !(await bcrypt.compare(password, user.password))) {
     return res.status(401).json({error: 'invalid Credential'})
    }
   const token = jwt.sign({userId: user._id, userName: user.userName}, 'yusudfsusysddscdsc', {expiresIn: '1h'});
   res.json({ token });
  } catch (e) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
