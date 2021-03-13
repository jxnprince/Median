const { randomNumber, randomYear, randomMonth, randomDay, initCounter } = require('../../data/index.js');



'use strict';

const makeUserId = initCounter();
const makeStoryId = initCounter();



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Bookmarks', [
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        userId: makeUserId(),
        storyId: makeStoryId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Bookmarks', null, {});
  }
};
