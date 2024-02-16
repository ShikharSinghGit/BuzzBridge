var express = require('express');
var router = express.Router();
var test = require('../public/javascripts/test');
var userModel = require('../public/javascripts/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/user/create', async (req,res)=>{
//  const myData =  await userModel.create({
//     userName: "Shikhar",
//     city: "Gorakhpur",
//     phone: 7678610944,
//     zipCode: 273015,

//   })
//   res.send(myData);
// })

module.exports = router;
