const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    static associate({ InsuranceCase, Agent, Client }) {
      Contract.belongsTo(InsuranceCase, { foreignKey: "insurance_case" });
      Contract.belongsTo(Agent, { foreignKey: "agent" });
      Contract.belongsTo(Client, { foreignKey: "client" });
    }
  }
  Contract.init(
    {
      contract_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      agent: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      client: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      insurance_case: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Contracts",
      timestamps: false,
    }
  );
  return Contract;
};
