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
    admin: DataTypes.BOOLEAN
  }, {});
  User.associate = function (models) {
    User.belongsToMany(models.User, {
      through: "Follow",
      otherKey: "userId",
      foreignKey: "followerId",
      as: "Followers"
    });

    User.belongsToMany(models.User, {
      through: "Follow",
      otherKey: "followerId",
      foreignKey: "userId",
      as: "Followees"
    });

    User.belongsToMany(models.Story, {
      through: "Like",
      foreignKey: "userId",
      otherKey: "storyId"
    });


    User.hasMany(models.Story, {
      foreignKey: "userId"
    });

    User.hasMany(models.Comment, {
      foreignKey: "userId"
    });


    User.belongsToMany(models.Story, {
      through: "Bookmark",
      foreignKey: "userId",
      otherKey: "storyId"
    });



  };
  return User;
};
