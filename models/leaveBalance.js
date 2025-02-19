module.exports = (sequelize, DataTypes) => {
    const LeaveBalance = sequelize.define(
      "LeaveBalance",
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
        totalLeaveDays: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        remainingLeaveDays: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        tableName: "LeaveBalances",
        timeStamp: true,
        freezeTableName: true,
      }
    );
  
    LeaveBalance.associate = (models) => {
      LeaveBalance.belongsTo(models.Employee, { foreignKey: 'employeeId' });
    };
  
    return LeaveBalance;
  };