const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate({ Contract }) {
      Client.hasMany(Contract, { foreignKey: "client" });
    }
  }
  Client.init(
    {
      client_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LEI: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Clients",
      timestamps: false,
    }
  );
  return Client;
};
