module.exports = (sequelize, DataTypes) => {
  const EmployeeReports = sequelize.define(
    "EmployeeReports",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      employeeId: {
        type: DataTypes.INTEGER,
        unique: false,
        references: {
          model: sequelize.models.Employees,
          key: 'id',
        },
      },
      reportId: {
        type: DataTypes.INTEGER,
        unique: false,
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