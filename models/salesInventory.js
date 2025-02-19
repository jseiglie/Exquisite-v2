module.exports = (sequelize, DataTypes) => {
    const SalesInventory = sequelize.define(
      "SalesInventory",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        salesId: {
          type: DataTypes.INTEGER,
          unique: false,
          references: {
            model: sequelize.models.Sales,
            key: 'id',
          },
        },
        inventoryId: {
          type: DataTypes.INTEGER,
          unique: false,
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