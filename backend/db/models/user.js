'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    avatar: DataTypes.STRING,
  }, {});


  User.associate = function (models) {
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
  return User;
};
