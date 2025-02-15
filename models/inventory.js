// models/inventory.js
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define(
    "Inventory",
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
      categoryId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE', // Add this line

      },
      subcategoryId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE', // Add this line

      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: "Inventory",
      timeStamp: true,
      freezeTableName: true,
    }
  );

  Inventory.associate = (models) => {
    Inventory.belongsTo(models.Category, { foreignKey: 'categoryId' });
    Inventory.belongsTo(models.Subcategory, { foreignKey: 'subcategoryId' });
    Inventory.hasMany(models.Favorites, { foreignKey: 'inventoryId', onDelete: 'CASCADE' }); // Add this line
    Inventory.hasMany(models.Sales, { foreignKey: 'inventoryId', onDelete: 'CASCADE' }); // Add this line
    Inventory.hasMany(models.ShoppingCarts, { foreignKey: 'inventoryId', onDelete: 'CASCADE' }); // Add this line
  };

  return Inventory;
};
