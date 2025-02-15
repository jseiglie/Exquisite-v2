// models/subcategories.js
module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define(
    "Subcategory",
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
      tableName: "Subcategories",
      timeStamp: true,
      freezeTableName: true,
    }
  );

  Subcategory.associate = (models) => {
    Subcategory.hasMany(models.Inventory, { foreignKey: 'subcategoryId' });
  };

  return Subcategory;
};
