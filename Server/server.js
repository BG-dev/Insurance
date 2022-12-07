const express = require("express");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const db = require("./models");
const clientsRoutes = require("./routes/clients");
const agentsRoutes = require("./routes/agents");
const contractsRoutes = require("./routes/contracts");
const insuranceCasesRoutes = require("./routes/insuranceCases");
const insuranceTypesRoutes = require("./routes/insuranceTypes");

dotenv.config();
db.sequelize.sync();

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/clients", clientsRoutes);
app.use("/agents", agentsRoutes);
app.use("/contracts", contractsRoutes);
app.use("/insurancecases", insuranceCasesRoutes);
app.use("/insurancetypes", insuranceTypesRoutes);

app.listen(port, () => {
  console.log(`Server was started on port: ${port}`);
});
