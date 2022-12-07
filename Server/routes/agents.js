const express = require("express");
const db = require("../models");
const Agent = db.Agent;

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const agents = await Agent.findAll();
    res.status(200).send({
      message: "Agents successfully got from the database",
      agents: agents,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const agentId = req.params.id;
    const agent = await Agent.findOne({
      where: { agent_id: agentId },
    });
    res.status(200).send({
      message: "Agent successfully got from the database",
      agent: agent,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const agentData = {
      ...req.body,
    };
    const agent = await Agent.create({ ...agentData });
    res.status(200).send({
      message: "Agent successfully added to the database",
      agent: agent,
    });
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const agentId = req.params.id;
    const agentData = {
      ...req.body,
    };
    const agent = await Agent.update(
      { ...agentData },
      { where: { agent_id: agentId } }
    );
    res.status(200).send({
      message: "Agent successfully updated to the database",
      agent: agent,
    });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const agentId = req.params.id;
    await Agent.destroy({ where: { agent_id: agentId } });
    res.status(200).send({
      message: "Agent successfully deleted from the database",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
