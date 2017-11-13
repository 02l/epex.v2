const Promise = require('bluebird');
const sequelize = require('./connection');

const initDatabase = () => {
	return new Promise((resolve, reject) => {
		var User = require('./../models/users.model');

		sequelize.sync().then(err => {


			resolve();
		});
	
	});

};
// this.sequelize.sync({
//   // force: true
// });
module.exports = initDatabase;