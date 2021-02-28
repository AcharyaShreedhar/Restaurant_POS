/**
 * Created by Shreedhar Acharya
 *
 */

require("dotenv").config();
const express = require("express");

const db = require("./db");
var cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const usersRoutes = require("./routes/usersRoutes");
const customersRoutes = require("./routes/customersRoutes");
const couriersRoutes = require("./routes/courierRoutes");
const suppliersRoutes = require("./routes/supplierRoutes");
const feedbacksRoutes = require("./routes/feedbackRoutes");
const specialMenuRoutes = require("./routes/specialMenuRoutes");

app.use("/api/v1", usersRoutes);
app.use("/api/v1", customersRoutes);
app.use("/api/v1", couriersRoutes);
app.use("/api/v1", suppliersRoutes);
app.use("/api/v1", feedbacksRoutes);
app.use("/api/v1", specialMenuRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
