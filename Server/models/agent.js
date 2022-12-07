const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {
    static associate({ InsuranceType, Contract }) {
      Agent.hasMany(Contract, { foreignKey: "agent" });
      Agent.belongsTo(InsuranceType, { foreignKey: "insurance_type" });
    }
  }
  Agent.init(
    {
      agent_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      insurance_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      full_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      employment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      passport_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Agents",
      timestamps: false,
    }
  );
  return Agent;
};
