const db = require("../db");

//get all inventory categories
exports.getAllInventoryCategories = async (req, res) => {
  const getAllInventoryCategoriesQuery = "SELECT * FROM inventory_categories";
  try {
    const results = await db.query(getAllInventoryCategoriesQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        inventoryCategories: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a Inventory Category
exports.getInventoryCategory = async (req, res) => {
  const getItemCategoryQuery = "SELECT * FROM inventory_categories WHERE invent_cat_id=$1";
  try {
    const results = await db.query(getInventoryCategoryQuery, [req.params.inventCatId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        inventoryCategory: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add an Inventory Category
exports.addInventoryCategory = async (req, res) => {
  const addInventoryCategoryQuery =
    "INSERT INTO inventory_categories (invent_cat_name,supplier_id) values ($1,$2) returning *";

  try {
    const results = await db.query(addInventoryCategoryQuery, [
      req.body.invent_cat_name,
      req.body.supplier_id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        inventoryCategory: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update Inventory Category
exports.updateInventoryCategory = async (req, res) => {
  const updateInventoryCategoryQuery =
    "UPDATE inventory_categories SET invent_cat_name=$1, supplier_id=$2  WHERE invent_cat_id=$3 returning *";
  try {
    const results = await db.query(updateInventoryCategoryQuery, [
      req.body.invent_cat_name,
      req.body.supplier_id,
      req.params.inventCatId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        inventoryCategory: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete an inventory Category
exports.deleteInventoryCategory = async (req, res) => {
  const deleteInventoryCategoryQuery =
    "DELETE  FROM inventory_categories WHERE invent_cat_id=$1";
  try {
    const results = await db.query(deleteInventoryCategoryQuery, [req.params.inventCatId]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
