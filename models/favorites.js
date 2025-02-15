module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define(
    "Favorites",
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
      tableName: "Favorites",
      timeStamp: true,
      freezeTableName: true,
    }
  );

  Favorites.associate = (models) => {
    Favorites.belongsTo(models.Inventory, { foreignKey: 'inventoryId' });
    Favorites.belongsTo(models.Users, { foreignKey: 'userId' }); // Add this line

  };

  return Favorites;
};