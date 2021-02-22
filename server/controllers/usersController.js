const db = require('../db')


//get all users
exports.getAllUsers = async (req, res) => {

    const getAllUsersQuery = 'SELECT * FROM users';
    try {
        const results = await db.query(getAllUsersQuery);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                users: results.rows,
            }
        })
    } catch (error) {
        res.status(400).send(err);
    }
}

// get a single user
exports.getUser = async (req, res) => {
    const getUserQuery = 'SELECT * FROM users WHERE user_id=$1'
    try {
        const results = await db.query(getUserQuery, [req.params.userId]);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                users: results.rows[0],
            }
        })
    } catch (error) {
        res.status(400).send(error);
    }
}


// add a user
exports.addUser = async (req, res) => {
    const addUserQuery = 'INSERT INTO users (user_name,user_address,user_email,user_pass,user_dob,user_phone,user_gender) values ($1,$2,$3,$4,$5,$6,$7) returning *'

    try {
        const results = await db.query(addUserQuery, [req.body.user_name, req.body.user_address, req.body.user_email, req.body.user_pass, req.body.user_dob, req.body.user_phone, req.body.user_gender]);
        res.status(200).json({
            status: "success",
            data: {
                user: results.rows[0]
            }
        })
    } catch (err) {
        res.status(400).send(err);
    }
}

// update user
exports.updateUser = async (req, res) => {
    const updateUserQuery = 'UPDATE users SET user_name=$1, user_address=$2, user_email=$3, user_pass=$4 ,user_dob=$5,user_phone=$6,user_gender=$7  WHERE user_id=$8 returning *'
    try {
        const results = await db.query(updateUserQuery, [req.body.user_name, req.body.user_address, req.body.user_email, req.body.user_pass, req.body.user_dob, req.body.user_phone, req.body.user_gender, req.params.userId]);
        res.status(200).json({
            status: "success",
            data: {
                user: results.rows[0],
            }
        })
    } catch (err) {
        res.status(400).send(err);
    }
}



//Delete a User
exports.deleteUser = async (req, res) => {
    const deleteUserQuery = 'DELETE  FROM users WHERE user_id=$1'
    try {
        const results = await db.query(deleteUserQuery, [req.params.userId]);
        res.status(200).json({
            status: "success"
        })
    } catch (err) {
        res.status(400).send(err);
    }
}


