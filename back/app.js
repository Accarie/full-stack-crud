const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());
//to use json
app.use(express.json());

// creating a connection at mysql
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password : '',
    database: 'login_crud'
})
//displaying a table of students
app.get('/', (req,res)=>{
    const sql = "SELECT * FROM student";
    db.query(sql, (err,result)=>{
        if(err) return res.json({Message: "An error at your server"});
        return res.json(result);
    })
})
// Creating a new student record
app.post('/student', (req,res)=>{
    const sql = "INSERT INTO student(`Name`,`Email`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email
    ]
    db.query(sql, [values], (err,result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
})
// reading the student's details
app.get('/read/:id', (req, res) =>{
    const sql = "SELECT * FROM student WHERE id = ?";
    const id = req.params.id;
    db.query(sql,[id], (err, result)=>{
        if(err) return res.json({Message: "An error occured at your server"});
        return res.json(result);
    })
})
// Updating the given student's info
app.put('/edit/:id', (req,res) =>{
    const sql = "UPDATE student SET `Name`=?, `Email`=? WHERE id =?";
    const id = req.params.id;
    db.query(sql, [req.body.name, req.body.email, id], (err,result)=>{
        if(err) return res.json({Message: "An error on the inside"});
        return res.json(result);

    })
})
//deleting the student and the details
app.delete('/delete/:id', (req,res)=> {
    const sql = "DELETE FROM student WHERE id=?";
    const id= req.params.id;
    db.query(sql,[id], (err,result) => {
        if(err) return res.json({Message: "An error on the inside"});
        return res.json(result);
    })
})

app.listen(8081, ()=>{
    console.log('App listening at...')
})