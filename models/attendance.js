module.exports = (sequelize, DataTypes) => {
    const Attendance = sequelize.define(
      "Attendance",
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
        date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        status: {
          type: DataTypes.ENUM,
          values: ["present", "absent", "leave"],
          allowNull: false,
        },
      },
      {
        tableName: "Attendances",
        timeStamp: true,
        freezeTableName: true,
      }
    );
  
    Attendance.associate = (models) => {
      Attendance.belongsTo(models.Employee, { foreignKey: 'employeeId' });
    };
  
    return Attendance;
  };