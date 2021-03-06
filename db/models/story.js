'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    imgUrl: DataTypes.STRING,
    postBody: DataTypes.TEXT,
    title: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    bookmarkId: DataTypes.INTEGER
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
  };
  return Story;
};