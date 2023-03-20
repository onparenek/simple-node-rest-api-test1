const http = require('http')
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const passport = require('passport')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(passport.initialize())
require('./middleware/passport')(passport)

const routes = require('./settings/routes')
const connection = require("./settings/db");
const db = require("./settings/db");
routes(app)

app.get('/', (req, res) => {
    connection.query('SELECT * FROM users', function (err, rows, fields) {
        if (err) throw err

        res.send(rows)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


//TODO CREATE AND DROP TABLE
// db.query('ALTER TABLE users ADD password VARCHAR(255)',function(err,result){
//     if(err){
//         console.log("ERROR:"+err.message);
//     }
//     else{
//         console.log("new column added");
//     }
// });