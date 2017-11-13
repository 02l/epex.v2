var bcrypt = require('bcryptjs')

const userModel = require('../../models/users.model');
const Sequelize = require('sequelize');

var signup = {
  get: function(req, res){
      res.render('/signup');
  },
  post: function(req, res){
    var username = req.body.username;
    var password = req.body.password;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    console.log('firstname')
    console.log(password, username)

    if(!username || !password) {
      console.log('User failed to be created')
      req.flash('error', 'Please fill out all fields');
      res.redirect('signup');
    }
    

    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(password, salt);

    var newUser = {
      username: username,
      salt: salt,
      password: hashedPassword,
      firstname: firstname,
      lastname: lastname,
      email: email
    };

    userModel.create(newUser).then( () => {
      console.log('user created');
      res.redirect('/');
    }).catch( (err) => {
      req.flash('error', 'Please choose a different username');
      res.redirect('/signup');
    });
  }
};

module.exports = {
  signup: signup
};