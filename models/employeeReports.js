module.exports = (sequelize, DataTypes) => {
  const EmployeeReports = sequelize.define(
    "EmployeeReports",
    {
      employeeId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.Employees,
          key: 'id',
        },
      },
      reportId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.Reports,
          key: 'id',
        },
      },
    },
    {
      tableName: "EmployeeReports",
      timeStamp: true,
      freezeTableName: true,
    }
  );

  return EmployeeReports;
};