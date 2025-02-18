module.exports = (sequelize, DataTypes) => {
    const InventoryLogs = sequelize.define(
      "InventoryLogs",
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
            model: sequelize.models.Inventory,
            key: "id",
          },
          onDelete: "CASCADE",
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: true, // Can be null if system-generated
          references: {
            model: sequelize.models.Users,
            key: "id",
          },
          onDelete: "SET NULL",
        },
        action: {
          type: DataTypes.ENUM("insert", "update", "delete"),
          allowNull: false,
        },
        previousValues: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        newValues: {
          type: DataTypes.JSON,
          allowNull: true,
        },
        timestamp: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        tableName: "InventoryLogs",
        timestamps: true,
        freezeTableName: true,
      }
    );
  
    InventoryLogs.associate = (models) => {
      InventoryLogs.belongsTo(models.Inventory, { foreignKey: "inventoryId" });
      InventoryLogs.belongsTo(models.Users, { foreignKey: "userId" });
    };
  
    return InventoryLogs;
  };
  