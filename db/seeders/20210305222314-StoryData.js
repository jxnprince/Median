'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stories', [
      {
        imgUrl: null,
        postBody: "test test test test test test test test test test test test test test test test test test test test ",
        title: "How to test your app",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        imgUrl: null,
        postBody: "a story is a story is a story is a story is a story is a story is a story...",
        title: "Amazing Story",
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Stories', null, {});
  }
};
