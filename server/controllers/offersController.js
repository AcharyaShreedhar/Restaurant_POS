const db = require("../db");

//get all offers
exports.getAllOffers = async (req, res) => {
  const getAllOffersQuery = "SELECT * FROM offers";
  try {
    const results = await db.query(getAllOffersQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        offers: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a Offer
exports.getOffer = async (req, res) => {
  const getOfferQuery = "SELECT * FROM orders WHERE offer_id=$1";
  try {
    const results = await db.query(getOfferQuery, [req.params.offerId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        offer: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add/place an Offer
exports.addOffer = async (req, res) => {
  const addOfferQuery =
    "INSERT INTO offers (offer_id,item_id) values ($1,$2) returning *";

  try {
    const results = await db.query(addOfferQuery, [
      req.body.offer_id,
      req.body.item_id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        offer: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update Offer
exports.updateOffer = async (req, res) => {
  const updateOfferQuery =
    "UPDATE offer SET offer_id=$1, item_id=$2 WHERE offer_id=$ returning *";
  try {
    const results = await db.query(updateOfferQuery, [
      req.body.offer_id,
      req.body.item_id,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        offer: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

//Delete an order
exports.deleteOffer = async (req, res) => {
  const deleteOfferQuery = "DELETE  FROM offers WHERE offer_id=$1";
  try {
    const results = await db.query(deleteOfferQuery, [req.params.offerId]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};