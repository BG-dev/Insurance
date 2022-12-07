const express = require("express");
const db = require("../models");
const InsuranceType = db.InsuranceType;
const InsuranceCase = db.InsuranceCase;
const Contract = db.Contract;

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const insuranceTypes = await InsuranceType.findAll({
      include: {
        model: InsuranceCase,
        include: {
          model: Contract,
        },
      },
    });
    console.log(insuranceTypes);
    res.status(200).send({
      message: "Insurance Types successfully got from the database",
      insuranceTypes: insuranceTypes,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
