const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class InsuranceType extends Model {
    static associate({ InsuranceCase, Agent }) {
      InsuranceType.hasMany(Agent, { foreignKey: "insurance_type" });
      InsuranceType.hasMany(InsuranceCase, { foreignKey: "insurance_type" });
    }
  }
  InsuranceType.init(
    {
      insurance_type_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      insurance_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Insurance_types",
      timestamps: false,
    }
  );
  return InsuranceType;
};
