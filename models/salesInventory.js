module.exports = (sequelize, DataTypes) => {
    const SalesInventory = sequelize.define(
      "SalesInventory",
      {
        salesId: {
          type: DataTypes.INTEGER,
          references: {
            model: sequelize.models.Sales,
            key: 'id',
          },
        },
        inventoryId: {
          type: DataTypes.INTEGER,
          references: {
            model: sequelize.models.Inventory,
            key: 'id',
          },
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        tableName: "SalesInventory",
        timeStamp: true,
        freezeTableName: true,
      }
    );
  
    return SalesInventory;
  };