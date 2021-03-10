'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Follows', [
      {
        userId: 1,
        followerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        followerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Follows', null, {});
    }
  };
