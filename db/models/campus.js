'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

// const defaultCampusProfilePics = [
  // 'imagelink1',
  // 'imagelink2',
  // 'etc.'
// ]

// const getRandomDefaultImage = () => images[Math.floor(Math.random() * defaultCampusProfilePics.length )];

module.exports = db.define('campus', {
  name: Sequelize.STRING,
  image: {
    type: Sequelize.STRING,
    // defaultValue: function () {
    //   return getRandomDefaultImage();
    // }
  }
});
