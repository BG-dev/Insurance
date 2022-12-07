const express = require("express");
const db = require("../models");
const Contract = db.Contract;
const Client = db.Client;
const Agent = db.Agent;
const InsuranceCase = db.InsuranceCase;

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const contracts = await Contract.findAll({
      include: [Client, Agent, InsuranceCase],
    });
    res.status(200).send({
      message: "Contracts successfully got from the database",
      contracts: contracts,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const contractId = req.params.id;
    const contract = await Contract.findOne({
      where: { contract_id: contractId },
    });
    res.status(200).send({
      message: "Contract successfully got from the database",
      contracts: contract,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const contractData = {
      ...req.body,
    };
    const newContractData = await Contract.create({ ...contractData });
    const contract = await Contract.findOne({
      where: { contract_id: newContractData.contract_id },
      include: [Client, Agent, InsuranceCase],
    });
    res.status(200).send({
      message: "Contract successfully added to the database",
      contract: contract,
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const contractId = req.params.id;
    const contractData = {
      ...req.body,
    };
    const contract = await Contract.update(
      { ...contractData },
      { where: { contract_id: contractId } }
    );
    res.status(200).send({
      message: "Contract successfully updated to the database",
      contract: contract,
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const contractId = req.params.id;
    await Contract.destroy({ where: { contract_id: contractId } });
    res.status(200).send({
      message: "Contract successfully deleted from the database",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
