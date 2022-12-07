const express = require("express");
const db = require("../models");
const Client = db.Client;
const Contract = db.Contract;
const Agent = db.Agent;
const InsuranceCase = db.InsuranceCase;

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const clients = await Client.findAll({
      include: {
        model: Contract,
        include: [
          {
            model: Agent,
          },
          {
            model: InsuranceCase,
          },
        ],
      },
    });
    res.status(200).send({
      message: "Clients successfully got from the database",
      clients: clients,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const clientId = req.params.id;
    const client = await Client.findOne({
      where: { client_id: clientId },
      include: {
        model: Contract,
        include: [
          {
            model: Agent,
          },
          {
            model: InsuranceCase,
          },
        ],
      },
    });
    res.status(200).send({
      message: "Client successfully got from the database",
      client: client,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const clientData = {
      ...req.body,
    };
    const client = await Client.create({ ...clientData });
    res.status(200).send({
      message: "Client successfully added to the database",
      client: client,
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const clientId = req.params.id;
    const clientData = {
      ...req.body,
    };
    const client = await Client.update(
      { ...clientData },
      { where: { client_id: clientId } }
    );
    res.status(200).send({
      message: "Client successfully updated to the database",
      client: client,
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const clientId = req.params.id;
    await Client.destroy({ where: { client_id: clientId } });
    res.status(200).send({
      message: "Client successfully deleted from the database",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
