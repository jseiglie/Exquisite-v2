module.exports = (sequelize, DataTypes) => {
    const SalaryPayment = sequelize.define(
      "SalaryPayment",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        salaryId: {
          type: DataTypes.INTEGER,
          unique: false,
          references: {
            model: sequelize.models.Salaries,
            key: 'id',
          },
        },
        paymentDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        tableName: "SalaryPayments",
        timeStamp: true,
        freezeTableName: true,
      }
    );
  
    SalaryPayment.associate = (models) => {
      SalaryPayment.belongsTo(models.Salary, { foreignKey: 'salaryId' });
    };
  
    return SalaryPayment;
  };