module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING(120),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      company: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM,
        values: ["user", "admin", "company"],
        defaultValue: "user",
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: "Users",
      timeStamp: true,
      freezeTableName: true,
    }
  );

  Users.associate = (models) => {
    Users.hasMany(models.Sales, { foreignKey: 'userId', onDelete: 'CASCADE' }); 
    Users.hasMany(models.ShoppingCarts, { foreignKey: 'userId', onDelete: 'CASCADE' }); 
    Users.hasMany(models.Favorites, { foreignKey: 'userId', onDelete: 'CASCADE' }); 
    Users.hasOne(models.UserProfile, { foreignKey: 'userId' });
    Users.hasOne(models.Employee, { foreignKey: 'userId' });


  };

  return Users;
};