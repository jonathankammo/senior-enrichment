'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

const defaultCampusProfilePics = [
  'http://www.chronicle.com/blogs/buildings/files/2011/09/Perdue-Hall.jpg',
  'http://www.masoncontractors.org/images/projects/mclennan-community-college-dennis-f-michaelis-academic-building/mclennan-community-college-dennis-f-michaelis-academic-building-1.jpg',
  'https://www.e-architect.co.uk/images/jpgs/new_york/brooklyn_college_westquad_vinoly0107.jpg',
  'https://www.stchas.edu/images/buildings/ssb-bldg-940.jpg',
  'http://ie-services.com/wp-content/uploads/2014/12/AC_SACNursing.jpg',
  'https://www.ucollege.edu/files/users/webadmin/images/CampusPhotos/Ortner%20Center%20exterior.jpg'
]

const getRandomDefaultImage = () => defaultCampusProfilePics[Math.floor(Math.random() * defaultCampusProfilePics.length )];

module.exports = db.define('campus', {
  name: Sequelize.STRING,
  image: {
    type: Sequelize.STRING,
    defaultValue: function () {
      return getRandomDefaultImage();
    }
  }
});
