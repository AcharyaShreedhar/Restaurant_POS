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
const discountRoutes = require("./routes/discountRoutes");
const orderRoutes = require("./routes/orderRoutes");
const itemRoutes = require("./routes/itemRoutes");
const inventoryRoutes = require("./routes/inventoryRoutes");
const purchaseRoutes = require("./routes/purchaseRoutes");
const userRolesRoutes = require("./routes/userRolesRoutes");
const restaurantTableRoutes = require("./routes/restaurantTableRoutes");
const orderedItemsRoutes = require("./routes/orderedItemRoutes");
const itemCategoryRoutes = require("./routes/itemCategoryRoutes");
const inventoryCategoryRoutes = require("./routes/inventoryCategoryRoutes");
const rolesRoutes = require("./routes/rolesRoutes");
const offeredItemsRoutes = require("./routes/offeredItemRoutes");
const offersRoutes = require("./routes/offersRoute");

app.use("/api/v1", usersRoutes);
app.use("/api/v1", customersRoutes);
app.use("/api/v1", couriersRoutes);
app.use("/api/v1", suppliersRoutes);
app.use("/api/v1", feedbacksRoutes);
app.use("/api/v1", specialMenuRoutes);
app.use("/api/v1", discountRoutes);
app.use("/api/v1", orderRoutes);
app.use("/api/v1", itemRoutes);
app.use("/api/v1", inventoryRoutes);
app.use("/api/v1", purchaseRoutes);
app.use("/api/v1", userRolesRoutes);
app.use("/api/v1", restaurantTableRoutes);
app.use("/api/v1", orderedItemsRoutes);
app.use("/api/v1", itemCategoryRoutes);
app.use("/api/v1", inventoryCategoryRoutes);
app.use("/api/v1", rolesRoutes);
app.use("/api/v1", offeredItemsRoutes);
app.use("/api/v1", offersRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
