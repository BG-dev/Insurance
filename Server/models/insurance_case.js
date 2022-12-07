const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class InsuranceCase extends Model {
    static associate({ InsuranceType, Contract }) {
      InsuranceCase.hasMany(Contract, { foreignKey: "insurance_case" });
      InsuranceCase.belongsTo(InsuranceType, { foreignKey: "insurance_type" });
    }
  }
  InsuranceCase.init(
    {
      insurance_case_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      insurance_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "Insurance_cases",
      timestamps: false,
    }
  );
  return InsuranceCase;
};
