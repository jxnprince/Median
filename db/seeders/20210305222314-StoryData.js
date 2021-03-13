const { randomStory, stories_array } = require('../../data/index.js');
// randomStory(stories_array[0])



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
