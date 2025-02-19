module.exports = (sequelize, DataTypes) => {
  const InventoryMovement = sequelize.define(
    "InventoryMovement",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      inventoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: sequelize.models.Inventories,
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: sequelize.models.Users,
          key: 'id'
        }
      },
      supplierId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: sequelize.models.Suppliers,
          key: 'id'
        }
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      movementType: {
        type: DataTypes.ENUM,
        values: ['IN', 'OUT'],
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "InventoryMovements",
      timeStamp: true,
      freezeTableName: true,
    }
  );

  InventoryMovement.associate = (models) => {
    InventoryMovement.belongsTo(models.Inventory, { foreignKey: "inventoryId" });
    InventoryMovement.belongsTo(models.Users, { foreignKey: "userId" });
    InventoryMovement.belongsTo(models.Suppliers, { foreignKey: "supplierId" });
  };

  return InventoryMovement;
};