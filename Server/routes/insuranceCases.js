const express = require("express");
const db = require("../models");
const InsuranceCase = db.InsuranceCase;

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const insuranceCases = await InsuranceCase.findAll();
    res.status(200).send({
      message: "Insurance Cases successfully got from the database",
      insuranceCases: insuranceCases,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
