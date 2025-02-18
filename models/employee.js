module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.Users,
          key: 'id',
        },
      },
      positionId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.Positions,
          key: 'id',
        },
      },
      departmentId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.Departments,
          key: 'id',
        },
      },
      hired: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      terminated: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "Employees",
      timeStamp: true,
      freezeTableName: true,
    }
  );

  Employee.associate = (models) => {
    Employee.belongsTo(models.Users, { foreignKey: 'userId' });
    Employee.belongsTo(models.Positions, { foreignKey: 'positionId' });
    Employee.belongsTo(models.Departments, { foreignKey: 'departmentId' });
    Employee.hasMany(models.Salary, { foreignKey: 'employeeId' });
    Employee.hasMany(models.Attendance, { foreignKey: 'employeeId' });
    Employee.hasMany(models.Leave, { foreignKey: 'employeeId' });
    Employee.hasOne(models.LeaveBalance, { foreignKey: 'employeeId' });
    Employee.belongsToMany(models.Report, {
      through: sequelize.models.EmployeeReports,
      foreignKey: 'employeeId',
      otherKey: 'reportId',
    });
  };

  return Employee;
};