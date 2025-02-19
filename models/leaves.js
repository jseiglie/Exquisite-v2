module.exports = (sequelize, DataTypes) => {
    const Leave = sequelize.define(
      "Leave",
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
        startDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        endDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        reason: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        reason: {
          type: DataTypes.ENUM,
          values: ["vacation", "sick", "personal", "other"],
          allowNull: false,
        },
      },
      {
        tableName: "Leaves",
        timeStamp: true,
        freezeTableName: true,
      }
    );
  
    Leave.associate = (models) => {
      Leave.belongsTo(models.Employee, { foreignKey: 'employeeId' });
    };
  
    return Leave;
  };