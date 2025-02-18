module.exports = (sequelize, DataTypes) => {
    const Salary = sequelize.define(
      "Salary",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        employeeId: {
          type: DataTypes.INTEGER,
          references: {
            model: sequelize.models.Employees,
            key: 'id',
          },
        },
        amount: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        tableName: "Salaries",
        timeStamp: true,
        freezeTableName: true,
      }
    );
  
    Salary.associate = (models) => {
      Salary.belongsTo(models.Employee, { foreignKey: 'employeeId' });
    };
  
    return Salary;
  };