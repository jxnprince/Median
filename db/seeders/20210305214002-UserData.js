'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [{
        email: 'test@test.net',
        firstName: 'test',
        lastName: 'testerson',
        hashedPassword:'Password1!',
        gender: 'female',
        birthdate: '1985-03-08',
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        email: 'jackson.prince@me.com',
        firstName: 'jackson',
        lastName: 'prince',
        hashedPassword:'Password1!',
        gender: 'male',
        birthdate: '1991-06-15',
        avatar: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'joshua@gmail.com',
        firstName: 'Joshua',
        lastName: 'Schutza',
        hashedPassword: 'Password1!',
        gender: 'male',
        birthdate: '1994-06-21',
        avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQHIkDiWxCwkOQ/profile-displayphoto-shrink_800_800/0/1530284974122?e=1620864000&v=beta&t=laeAjVIRrk74PUUK9ZlPS7JZsXAK85wSDERGUakhFUw",
        createdAt: new Date(),
        updatedAt: new Date()
      }

      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
