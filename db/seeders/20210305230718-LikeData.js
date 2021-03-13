const { randomNumber, randomYear, randomMonth, randomDay, initCounter } = require('../../data/index.js');

'use strict';


const makeUserId = initCounter()
// const makeStoryId = initCounter()


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes',
    [
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: randomNumber(43),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Likes', null, {});
  }
};
