const Sequelize = require('sequelize');
const connection = 'postgres://lyernzhy:rgG4f0gZ5CB_qXkl_jzLMC3-UChOIy2c@baasu.db.elephantsql.com:5432/lyernzhy';

// const sequelize = new Sequelize(connection, {
//   dialect: 'mysql',
//   ssl: true
// });

// const sequelize = new Sequelize(connection, {
// port: 3306,
// dialect: 'mysql',
// maxConcurrentQueries: 100,
// dialectOptions: {
// ssl:'Amazon RDS'
// },
// pool: { maxConnections: 5, maxIdleTime: 30},
// language: 'en'
// })

const sequelize = new Sequelize(connection, {
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }).catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
