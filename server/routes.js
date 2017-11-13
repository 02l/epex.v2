var router = require('express').Router();
var controller = require('./controllers');
var passport = require('passport');
var path = require('path');
var bluebird = require('bluebird');

const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

const User = require('../models/users.model');


router.get('/signup', controller.signup.get);

router.get('/logout', (req, res) => {
  console.log('logged user out');
  req.logout();
});

router.get('/users', (req, res) => {
  console.log('getting users');
  User.findAll().then((data) => {
    res.send(data)
  })
})

router.get('/users/:username', (req, res) => {
  console.log('getting specific user');
  console.log(req.params.username);

  User.findAll({
    where: {
      username: req.params.username
    }
  }).then((data) => {
    res.send(data)
  })
})

router.get('/user/:id', (req, res) => {
  console.log('getting specific user');
  console.log(req.params);

  User.find({
    where: {
      id: req.params.id
    }
  }).then((data) => {
    res.send(data)
  })
})


router.post('/signup', controller.signup.post);
router.post('/login', (req, res, next) => {

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.status(400);
      return res.send('false');
    }

    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.send(user);
    });

  })(req, res, next);

});



module.exports = router;
