module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "Sales",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      sellerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      discount: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0,
      },
      method: {
        type: DataTypes.ENUM,
        values: ["cash", "online"],
        defaultValue: "cash",
      },
    },
    {
      tableName: "Sales",
      timeStamp: true,
      freezeTableName: true,
    }
  );

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, { foreignKey: 'userId' });
    Sales.belongsTo(models.Users, { foreignKey: 'sellerId' });
    Sales.belongsToMany(models.Inventory, {
      through: 'SalesInventory',
      foreignKey: 'salesId',
      otherKey: 'inventoryId',
    });
  };

  return Sales;
};