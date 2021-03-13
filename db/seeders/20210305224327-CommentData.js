const { randomComment, comments_array, initCounter } = require('../../data/index.js');
// randomComment(comments_array[0])


'use strict';


const makeUserId = initCounter();
const makeStoryId = initCounter();



module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments',
    [
      randomComment(comments_array[0], makeUserId(), makeStoryId()),
      randomComment(comments_array[1], makeUserId(), makeStoryId()),
      randomComment(comments_array[2], makeUserId(), makeStoryId()),
      randomComment(comments_array[3], makeUserId(), makeStoryId()),
      randomComment(comments_array[4], makeUserId(), makeStoryId()),
      randomComment(comments_array[5], makeUserId(), makeStoryId()),
      randomComment(comments_array[6], makeUserId(), makeStoryId()),
      randomComment(comments_array[7], makeUserId(), makeStoryId()),
      randomComment(comments_array[8], makeUserId(), makeStoryId()),
      randomComment(comments_array[9], makeUserId(), makeStoryId()),
      randomComment(comments_array[10], makeUserId(), makeStoryId()),
      randomComment(comments_array[11], makeUserId(), makeStoryId()),
      randomComment(comments_array[12], makeUserId(), makeStoryId()),
      randomComment(comments_array[13], makeUserId(), makeStoryId()),
      randomComment(comments_array[14], makeUserId(), makeStoryId()),
      randomComment(comments_array[15], makeUserId(), makeStoryId()),
      randomComment(comments_array[16], makeUserId(), makeStoryId()),
      randomComment(comments_array[17], makeUserId(), makeStoryId()),
      randomComment(comments_array[18], makeUserId(), makeStoryId()),
      randomComment(comments_array[19], makeUserId(), makeStoryId()),
      randomComment(comments_array[20], makeUserId(), makeStoryId()),
      randomComment(comments_array[21], makeUserId(), makeStoryId()),
      randomComment(comments_array[22], makeUserId(), makeStoryId()),
      randomComment(comments_array[23], makeUserId(), makeStoryId()),
      randomComment(comments_array[24], makeUserId(), makeStoryId()),
      randomComment(comments_array[25], makeUserId(), makeStoryId()),
      randomComment(comments_array[26], makeUserId(), makeStoryId()),
      randomComment(comments_array[27], makeUserId(), makeStoryId()),
      randomComment(comments_array[28], makeUserId(), makeStoryId()),
      randomComment(comments_array[29], makeUserId(), makeStoryId()),
      randomComment(comments_array[30], makeUserId(), makeStoryId()),
      randomComment(comments_array[31], makeUserId(), makeStoryId()),
      randomComment(comments_array[32], makeUserId(), makeStoryId()),
      randomComment(comments_array[33], makeUserId(), makeStoryId()),
      randomComment(comments_array[34], makeUserId(), makeStoryId()),
      randomComment(comments_array[35], makeUserId(), makeStoryId()),
      randomComment(comments_array[36], makeUserId(), makeStoryId()),
      randomComment(comments_array[37], makeUserId(), makeStoryId()),
      randomComment(comments_array[38], makeUserId(), makeStoryId()),
      randomComment(comments_array[39], makeUserId(), makeStoryId()),
      randomComment(comments_array[40], makeUserId(), makeStoryId()),
      randomComment(comments_array[41], makeUserId(), makeStoryId()),
      randomComment(comments_array[42], makeUserId(), makeStoryId()),
      randomComment(comments_array[43], makeUserId(), makeStoryId()),
      randomComment(comments_array[44], makeUserId(), makeStoryId()),
      randomComment(comments_array[45], makeUserId(), makeStoryId()),
      randomComment(comments_array[46], makeUserId(), makeStoryId()),
      randomComment(comments_array[47], makeUserId(), makeStoryId()),
      randomComment(comments_array[48], makeUserId(), makeStoryId()),
      randomComment(comments_array[49], makeUserId(), makeStoryId()),
      randomComment(comments_array[50], makeUserId(), makeStoryId()),
      randomComment(comments_array[51], makeUserId(), makeStoryId()),
      randomComment(comments_array[52], makeUserId(), makeStoryId()),
      randomComment(comments_array[53], makeUserId(), makeStoryId()),
      randomComment(comments_array[54], makeUserId(), makeStoryId()),
      randomComment(comments_array[55], makeUserId(), makeStoryId()),
      randomComment(comments_array[56], makeUserId(), makeStoryId()),
      randomComment(comments_array[57], makeUserId(), makeStoryId()),
      randomComment(comments_array[58], makeUserId(), makeStoryId()),
      randomComment(comments_array[59], makeUserId(), makeStoryId()),
      randomComment(comments_array[60], makeUserId(), makeStoryId())
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
