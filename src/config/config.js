const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql', 'root', 'docker', {
  dialect: 'mysql',
});

module.exports = sequelize;
