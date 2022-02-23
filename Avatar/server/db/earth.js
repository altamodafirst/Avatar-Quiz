const Sequelize = require('sequelize');
const db = require('./database')

const Earth = db.define('earth', {
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

module.exports = Earth