const Sequelize = require('sequelize');
const db = require('./database')

const Fire = db.define('fire', {
  Question: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    },
    score: {
      type:
        Sequelize.INTEGER,
      validate: {
        min: 1,
        max: 5
      },
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  }
})

module.exports = Fire