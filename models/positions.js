module.exports = (sequelize, DataTypes) => {
    const Positions = sequelize.define(
      "Positions",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
      },
      {
        tableName: "Positions",
        timeStamp: true,
        freezeTableName: true,
      }
    );
  
    Positions.associate = (models) => {
      Positions.hasMany(models.Employee, { foreignKey: 'positionId' });
    };
  
    return Positions;
  };