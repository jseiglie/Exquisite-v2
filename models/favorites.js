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
          model: sequelize.models.Inventory,
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.Users,
          key: 'id',
        },
        onDelete: 'CASCADE',
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
    Favorites.belongsTo(models.Users, { foreignKey: 'userId' });
  };

  return Favorites;
};