module.exports = (sequelize, DataTypes) => {
    const UserProfile = sequelize.define(
      "UserProfile",
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
        address: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        phoneNumber: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        city: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        state: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        country: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        zipCode: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        tableName: "UserProfiles",
        timeStamp: true,
        freezeTableName: true,
      }
    );
  
    UserProfile.associate = (models) => {
      UserProfile.belongsTo(models.Users, { foreignKey: 'userId' });
    };
  
    return UserProfile;
  };