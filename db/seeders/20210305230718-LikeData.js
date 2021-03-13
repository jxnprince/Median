const { randomNumber, randomYear, randomMonth, randomDay } = require('../../data/index.js');



'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes',
    [
      {
        storyId: 1,
        userId: 1,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Likes', null, {});
  }
};
