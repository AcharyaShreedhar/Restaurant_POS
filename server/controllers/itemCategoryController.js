const db = require("../db");

//get all items categories
exports.getAllItemCategories = async (req, res) => {
  const getAllItemCategoriesQuery = "SELECT * FROM item_categories";
  try {
    const results = await db.query(getAllItemCategoriesQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        itemCategories: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a Item Category
exports.getItemCategory = async (req, res) => {
  const getItemCategoryQuery = "SELECT * FROM item_categories WHERE cat_id=$1";
  try {
    const results = await db.query(getItemCategoryQuery, [req.params.catId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        itemCategory: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add an Item Category
exports.addItemCategory = async (req, res) => {
  const addItemCategoryQuery =
    "INSERT INTO item_categories (parent_cat_id,cat_name) values ($1,$2) returning *";

  try {
    const results = await db.query(addItemCategoryQuery, [
      req.body.parent_cat_id,
      req.body.cat_name,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        itemCategory: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update Item Category
exports.updateItemCategory = async (req, res) => {
  const updateItemCategoryQuery =
    "UPDATE item_categories SET parent_cat_id=$1, cat_name=$2  WHERE cat_id=$3 returning *";
  try {
    const results = await db.query(updateItemCategoryQuery, [
      req.body.parent_cat_id,
      req.body.cat_name,
      req.params.catId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        itemCategory: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete an item Category
exports.deleteItemCategory = async (req, res) => {
  const deleteItemCategoryQuery =
    "DELETE  FROM item_categories WHERE cat_id=$1";
  try {
    const results = await db.query(deleteItemCategoryQuery, [req.params.catId]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
