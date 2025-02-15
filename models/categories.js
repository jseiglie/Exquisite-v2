"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category", 
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Categories",
      timeStamp: true,
      freezeTableName: true,
    }
  );

  Category.associate = (models) => {
    Category.hasMany(models.Inventory, { foreignKey: 'categoryId' });
  };

  return Category;
};
