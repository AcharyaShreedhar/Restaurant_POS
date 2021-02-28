const db = require("../db");

//get all Special Menu
exports.getAllSpecialMenu = async (req, res) => {
  const getAllSpecialMenuQuery = "SELECT * FROM special_menus";
  try {
    const results = await db.query(getAllSpecialMenuQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        special_menus: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a specialMenu
exports.getSpecialMenu = async (req, res) => {
  const getSpecialMenuQuery = "SELECT * FROM special_menu WHERE offer_id=$1";
  try {
    const results = await db.query(getSpecialMenuQuery, [req.params.offerId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        special_menus: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a special_menu
exports.addSpecialMenu = async (req, res) => {
  const addSpecialMenuQuery =
    "INSERT INTO special_menus (item_id,offer_id,offer_item,smenu_date) values ($1,$2,$3,$4) returning *";

  try {
    const results = await db.query(addSpecialMenuQuery, [
      req.body.item_id,
      req.body.offer_id,
      req.body.offer_item,
      req.body.smenu_date,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        special_menu: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update special menu
exports.updateSpecialMenu = async (req, res) => {
  const updateSpecialMenuQuery =
    "UPDATE special_menus SET item_id=$1, offer_id=$2, offer_item=$3, smenu_date=$4  WHERE offer_id=$5 returning *";
  try {
    const results = await db.query(updateSpecialMenuQuery, [
      req.body.item_id,
      req.body.offer_id,
      req.body.offer_item,
      req.body.smenu_date,
      req.params.offerId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        special_menu: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete a special_menu
exports.deleteSpecialMenu = async (req, res) => {
  const deleteSpecialMenuQuery =
    "DELETE  FROM special_menus WHERE offer_id=$1";
  try {
    const results = await db.query(deleteSpecialMenuQuery, [
      req.params.oofferId,
    ]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
