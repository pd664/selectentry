const mysql = require('mysql');
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.json())

const con = mysql.createConnection({
    host: "database-2.cso45dl76woa.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "12345678",
    database: "admintailor"
})

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
});

app.use('logout', (req, res) => {
    res.send({
        token: 'logout'
    })
})

app.post('/submit', (req, res) => {
    const name = req.body.name
    const phone = req.body.phone
    const copy = req.body.copy
    const date = req.body.date

    var sql = "INSERT INTO submit (name, phone, copy, date) VALUE (?,?,?,?)"
    con.query(sql, [name, phone, copy, date], (err, result, fields) => {
        if (err) throw err
        console.log("confirm")
    })
})

app.get('/search', (req, res) => {

    var sql = `SELECT * FROM submit`
    con.query(sql , (err, result, fields) => {
        if (err) throw err
        res.send(result)
        console.log("confirm")
    })
})


app.get('/search/searchRecordByName/:name', (req, res) => {
    var sql = "SELECT * FROM submit WHERE name LIKE ?"
    con.query(sql, `${req.params.name}%` , (err, result, fields) => {
        if (err) throw err
        res.send(result) 
        console.log("confirm")
} )
})


app.get('/search/searchRecordByPhone/:phone', (req, res) => {
    var sql = "SELECT * FROM submit WHERE phone LIKE ?"
    con.query(sql, `${req.params.phone}%` , (err, result, fields) => {
        if (err) throw err
        res.send(result) 
        console.log("confirm")
} )
})

app.get('/search/searchRecordByCopy/:copy', (req, res) => {
    var sql = "SELECT * FROM submit WHERE copy LIKE ?"
    con.query(sql, `${req.params.copy}%` , (err, result, fields) => {
        if (err) throw err
        res.send(result) 
        console.log("confirm")
} )
})

app.get('/search/searchRecordByDate/:date', (req, res) => {
    var sql = "SELECT * FROM submit WHERE date LIKE ?"
    con.query(sql, `${req.params.date}%` , (err, result, fields) => {
        if (err) throw err
        res.send(result) 
        console.log("confirm")
} )
})




app.patch('update', (req, res) => {

    copy = req.body.copy

    var sql = "UPDATE submit SET copy=?"
    con.query(sql, [] ,{})
})

const port = 5000

app.listen( port, () => {
    console.log(`app is listening on ${port}`)
})