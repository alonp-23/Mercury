var express = require('express');
var router = express();
const userService = require('../services/UsersService.js');

router.get('/allUsers', async function(req,res,next) {
  res.json(await userService.getAll());
});

router.post('/login', async function(req,res,next) {
  const { username, password} = req.body;
  const loginSuccessful = await userService.authenticateUser(username, password);
  
  if(loginSuccessful) { res.send(200);} 
  else { res.send(401); }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(`postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@
  ${process.env.DB_HOST}:31000/${process.env.DB_DATABASE}`);
});

module.exports = router;
