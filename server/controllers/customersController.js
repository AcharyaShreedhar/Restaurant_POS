const db = require("../db");

//get all customers
exports.getAllCustomers = async (req, res) => {
  const getAllCustomersQuery = "SELECT * FROM customers";
  try {
    const results = await db.query(getAllCustomersQuery);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        customers: results.rows,
      },
    });
  } catch (error) {
    res.status(400).send(err);
  }
};

// get a single customer
exports.getCustomer = async (req, res) => {
  const getCustomerQuery = "SELECT * FROM customers WHERE cust_id=$1";
  try {
    const results = await db.query(getCustomerQuery, [req.params.customerId]);
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        customers: results.rows[0],
      },
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

// add a customer
exports.addCustomer = async (req, res) => {
  const addCustomerQuery =
    "INSERT INTO customers (cust_name,cust_address,cust_email,cust_pass,cust_dob,cust_phone,cust_company) values ($1,$2,$3,$4,$5,$6,$7) returning *";

  try {
    const results = await db.query(addCustomerQuery, [
      req.body.cust_name,
      req.body.cust_address,
      req.body.cust_email,
      req.body.cust_pass,
      req.body.cust_dob,
      req.body.cust_phone,
      req.body.cust_company,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        customer: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

// update customer
exports.updateCustomer = async (req, res) => {
  const updateCustomerQuery =
    "UPDATE customers SET cust_name=$1, cust_address=$2, cust_email=$3, cust_pass=$4 ,cust_dob=$5,cust_phone=$6,cust_company=$7  WHERE cust_id=$8 returning *";
  try {
    const results = await db.query(updateCustomerQuery, [
      req.body.cust_name,
      req.body.cust_address,
      req.body.cust_email,
      req.body.cust_pass,
      req.body.cust_dob,
      req.body.cust_phone,
      req.body.cust_company,
      req.params.customerId,
    ]);
    res.status(200).json({
      status: "success",
      data: {
        customer: results.rows[0],
      },
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
//Delete a Customer
exports.deleteCustomer = async (req, res) => {
  const deleteCustomerQuery = "DELETE  FROM customers WHERE cust_id=$1";
  try {
    const results = await db.query(deleteCustomerQuery, [
      req.params.customerId,
    ]);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(400).send(err);
  }
};
