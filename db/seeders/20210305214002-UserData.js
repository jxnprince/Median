'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [{
        email: 'test@test.net',
        firstName: 'test',
        lastName: 'testerson',
        hashedPassword:'password',
        gender: 'female',
        birthdate: '1985-03-08',
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        email: 'jackson.prince@me.com',
        firstName: 'jackson',
        lastName: 'prince',
        hashedPassword:'password',
        gender: 'male',
        birthdate: '1991-06-15',
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
