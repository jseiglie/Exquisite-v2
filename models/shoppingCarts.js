module.exports = (sequelize, DataTypes) => {
  const ShoppingCarts = sequelize.define(
    "ShoppingCarts",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      inventoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Inventory',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      tableName: "ShoppingCarts",
      timeStamp: true,
      freezeTableName: true,
    }
  );

  ShoppingCarts.associate = (models) => {
    ShoppingCarts.belongsTo(models.Inventory, { foreignKey: 'inventoryId' });
    ShoppingCarts.belongsTo(models.Users, { foreignKey: 'userId' });

  };

  return ShoppingCarts;
};