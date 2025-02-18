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
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      trigger: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: null,
      },
      brandId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.Brands,
          key: 'id',
        },
      },
      supplierId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.Suppliers,
          key: 'id',
        },
        allowNull: false,
      },
    },
    {
      tableName: "Inventory",
      timeStamp: true,
      freezeTableName: true,
    }
  );

  Inventory.associate = (models) => {
    Inventory.belongsTo(models.Brand, { foreignKey: 'brandId' });
    Inventory.belongsTo(models.Suppliers, { foreignKey: 'supplierId' }); 

  };

  return Inventory;
};