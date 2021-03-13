const { randomStory } = require('../../data/index.js');




'use strict';





module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stories',
    [
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
