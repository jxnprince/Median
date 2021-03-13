const { randomStory, stories_array, initCounter } = require('../../data/index.js');
// randomStory(stories_array[0])



'use strict';


const count = initCounter();



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Stories',
    [
      randomStory(stories_array[0], count()),
      randomStory(stories_array[1], count()),
      randomStory(stories_array[2], count()),
      randomStory(stories_array[3], count()),
      randomStory(stories_array[4], count()),
      randomStory(stories_array[5], count()),
      randomStory(stories_array[6], count()),
      randomStory(stories_array[7], count()),
      randomStory(stories_array[8], count()),
      randomStory(stories_array[9], count()),
      randomStory(stories_array[10], count()),
      randomStory(stories_array[11], count()),
      randomStory(stories_array[12], count()),
      randomStory(stories_array[13], count()),
      randomStory(stories_array[14], count()),
      randomStory(stories_array[15], count()),
      randomStory(stories_array[16], count()),
      randomStory(stories_array[17], count()),
      randomStory(stories_array[18], count()),
      randomStory(stories_array[19], count()),
      randomStory(stories_array[20], count()),
      randomStory(stories_array[21], count()),
      randomStory(stories_array[22], count()),
      randomStory(stories_array[23], count()),
      randomStory(stories_array[24], count()),
      randomStory(stories_array[25], count()),
      randomStory(stories_array[26], count()),
      randomStory(stories_array[27], count()),
      randomStory(stories_array[28], count()),
      randomStory(stories_array[29], count()),
      randomStory(stories_array[30], count()),
      randomStory(stories_array[31], count()),
      randomStory(stories_array[32], count()),
      randomStory(stories_array[33], count()),
      randomStory(stories_array[34], count()),
      randomStory(stories_array[35], count()),
      randomStory(stories_array[0], count()),
      randomStory(stories_array[1], count()),
      randomStory(stories_array[2], count()),
      randomStory(stories_array[3], count()),
      randomStory(stories_array[4], count()),
      randomStory(stories_array[5], count()),
      randomStory(stories_array[6], count())
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
