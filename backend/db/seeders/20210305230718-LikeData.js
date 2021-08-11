const { randomYear, randomMonth, randomDay, initCounter } = require('../../data/index.js');

'use strict';


const makeUserId = initCounter()
const makeStoryId = initCounter()


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes',
    [
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
        userId: makeUserId(),
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        storyId: makeStoryId(),
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
