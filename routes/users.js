var express = require('express');
var router = express.Router();
const dataUsers = require('../data/users');
const { hash } = require('./login');

// post user
router.post('/', async (req, res) => {
    const hashedPassword = await hash(req.body.password)
    const user = {
      username: req.body.username,
      password: hashedPassword
    };
    try{
      const result = await dataUsers.post(user);
      res.json(result);
    }
    catch (error) {
      res.status(500).send(error);
    }
});

module.exports = router;
