const bcrypt = require('bcryptjs')
const { getRandomName, randomNumber, randomYear, randomMonth, randomDay,
  getRandomMaleImg, getRandomFemaleImg } = require('../../data/index.js');






'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
        email: 'test@test.net',
        firstName: 'test',
        lastName: 'testerson',
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: '1985-03-08',
        avatar: `https://i.imgur.com/zB0xU1K.png?1`,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        email: 'jackson.prince@me.com',
        firstName: 'jackson',
        lastName: 'prince',
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: '1991-06-15',
        avatar: `https://i.imgur.com/zB0xU1K.png?1`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'joshua@gmail.com',
        firstName: 'Joshua',
        lastName: 'Schutza',
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: '1994-06-21',
        avatar: "https://i.imgur.com/zB0xU1K.png?1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('m'),
        lastName: getRandomName('m'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'male',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomMaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },

      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      },
      {
        email: `${bcrypt.hashSync(`${randomNumber(100)}`, 2)}@gmail.com`,
        firstName: getRandomName('f'),
        lastName: getRandomName('f'),
        hashedPassword: bcrypt.hashSync('password', 10),
        gender: 'female',
        birthdate: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        avatar: `${getRandomFemaleImg()}`,
        createdAt: `${randomYear()}-${randomMonth()}-${randomDay()}`,
        updatedAt: new Date()
      }

      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
