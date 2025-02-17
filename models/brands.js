module.exports = (sequelize, DataTypes) => {
    const Brand = sequelize.define(
      "Brand",
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
          unique: true,
        },
      },
      {
        tableName: "Brands",
        timeStamp: true,
        freezeTableName: true,
      }
    );
  
    Brand.associate = (models) => {
      Brand.hasMany(models.Inventory, { foreignKey: 'brandId' });
    };
  
    return Brand;
  };