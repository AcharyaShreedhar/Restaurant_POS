require('dotenv').config()
const express = require("express")

const db = require('./db')
var cors = require('cors')



const app = express()


app.use(express.json());
app.use(cors()) 

// app.use((req,res, next)=>
//     {
//         console.log("this is middleware");
//         next();
//     }
// );

//get all Employees
app.get("/api/v1/employees", async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM employee')

        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                employees: results.rows,
            }
        })
    } catch (err) {
        res.status(400).send(err);
    }


});

//get a Employee
app.get("/api/v1/employees/:id", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM employee WHERE employee_id=$1", [req.params.id,]);
        res.status(200).json({
            status: "success",
            data: {
                employee: results.rows[0],
            }
        })
    } catch (err) {
        res.status(400).send(err);
    }
})

//Add an Employee
app.post("/api/v1/employees/add", async (req, res) => {
    try {
        const results = await db.query("INSERT INTO employee (name,address,gender,designation,date_of_birth,salary,joined_date,contact) values ($1,$2,$3,$4,$5,$6,$7,$8) returning *", [req.body.name, req.body.address, req.body.gender, req.body.designation, req.body.date_of_birth, req.body.salary, req.body.joined_date, req.body.contact]);
        res.status(200).json({
            status: "success",
            data: {
                employee: results.rows[0]
            }
        })
    } catch (err) {
        res.status(400).end(err);
    }
});


//Update an Employee
app.put("/api/v1/employees/update/:id", async (req, res) => {
    try {
        const results = await db.query("UPDATE employee SET name=$1, address=$2, gender=$3, designation=$4 ,date_of_birth=$5,salary=$6,joined_date=$7,contact=$8  WHERE employee_id=$9 returning * ", [req.body.name, req.body.address, req.body.gender, req.body.designation, req.body.date_of_birth, req.body.salary, req.body.joined_date, req.body.contact, req.params.id]);
        res.status(200).json({
            status: "success",
            data: {
                employee: results.rows[0],
            }
        })
    } catch (err) {
        res.status(400).end(err);
    }
});

//Delete an Employee
app.delete("/api/v1/employees/delete/:id", async(req, res) => {
    try {
        const results = await db.query("DELETE  FROM employee WHERE employee_id=$1", [req.params.id,]);
        res.status(200).json({
            status: "success"
        })
    } catch (err) {
        res.status(400).end(err);
    }
});




const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
});