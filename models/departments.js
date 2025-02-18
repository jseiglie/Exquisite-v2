module.exports = (sequelize, DataTypes) => {
    const Departments = sequelize.define(
      "Departments",
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
        tableName: "Departments",
        timeStamp: true,
        freezeTableName: true,
      }
    );
  
    Departments.associate = (models) => {
      Departments.hasMany(models.Employee, { foreignKey: 'departmentId' });
    };
  
    return Departments;
  };