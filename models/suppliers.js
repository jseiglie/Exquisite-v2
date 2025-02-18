// models/suppliers.js
module.exports = (sequelize, DataTypes) => {
  const Suppliers = sequelize.define(
    "Suppliers",
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
      },
      landline: {
        type: DataTypes.STRING,
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "Suppliers",
      timeStamp: true,
      freezeTableName: true,
    }
  );

  Suppliers.associate = (models) => {
    Suppliers.hasMany(models.Inventory, { foreignKey: "SuppliersId" });
  };

  return Suppliers;
};
