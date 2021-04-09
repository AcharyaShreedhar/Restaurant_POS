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

// add place an Offer
exports.addOffer = async (req, res) => {
  const addOfferQuery =
    "INSERT INTO offers (offer_type,item_id,offer_start,offer_end) values ($1,$2,$3,$4) returning *";

  try {
    const results = await db.query(addOfferQuery, [
      req.body.offerType,
      req.body.item_id,
      req.body.offer_start,
      req.body.offer_end
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
    "UPDATE offer SET offer_type=$1, item_id=$2, offer_start=$3, offer_end=$4 WHERE offer_id=$5 returning *";
  try {
    const results = await db.query(updateOfferQuery, [
      req.body.offerType,
      req.body.itemId,
      req.body.offerStart,
      req.body.offerEnd,
      req.body.offerId
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

//Delete an offer
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