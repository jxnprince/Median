'use strict';
const bcrypt = require('bcryptjs');


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      },
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
    gender: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    avatar: DataTypes.STRING,
  }, {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  });



  User.associate =  models => {
    User.belongsToMany(models.User, {
      through: "Follow",
      otherKey: "userId",
      foreignKey: "followerId",
      as: "Followers",
      // onDelete: 'CASCADE',
      // hooks: true
    });

    User.belongsToMany(models.User, {
      through: "Follow",
      otherKey: "followerId",
      foreignKey: "userId",
      as: "Followees",
      //! Only use onDelete: 'CASCADE' if it belongs to something
      //! Error is an infinte SELECT loop
      // onDelete: 'CASCADE',
      // hooks: true
    });


    User.belongsToMany(models.Story, {
      through: "Like",
      foreignKey: "userId",
      otherKey: "storyId",
      // onDelete: 'CASCADE',
      // hooks: true
    });



    User.hasMany(models.Story, {
      foreignKey: "userId",
      // onDelete: 'CASCADE',
      // hooks: true
    });



    User.hasMany(models.Comment, {
      foreignKey: "userId",
      onDelete: 'CASCADE',
      hooks: true
    });



    User.belongsToMany(models.Story, {
      through: "Bookmark",
      foreignKey: "userId",
      otherKey: "storyId",
      // onDelete: 'CASCADE',
      // hooks: true
    });


  };



  User.prototype.toSafeObject = () => {
    const { id, firstName, lastName, gender, birthdate, email, avatar } = this; // context will be the User instance
    return { id, firstName, lastName, gender, birthdate, email, avatar };
  };



  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  };



  User.getCurrentUserById = async id => {
    return await User.scope('currentUser').findByPk(id);
  };



  User.login = async ({ credential, password }) => {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          email: credential,
        },
      },
    });

    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
    // return false if the user was not in the db and the password validation failed
    return false;
  };




  User.signup = async ({ email, firstName, lastName, password, confPassword }) => {
    const hashedPassword = bcrypt.hashSync(password);
    if(password !== confPassword) {
      return false;
    }

    const user = await User.create({ firstName, lastName, email, hashedPassword });

    if (user) {
      return await User.scope('currentUser').findByPk(user.id);
    }

    return false;
  };



  return User;
};
