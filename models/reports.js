module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define(
    "Report",
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
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "Reports",
      timeStamp: true,
      freezeTableName: true,
    }
  );

  Report.associate = (models) => {
    Report.belongsToMany(models.Employee, {
      through: sequelize.models.EmployeeReports,
      foreignKey: 'reportId',
      otherKey: 'employeeId',
    });
  };

  return Report;
};