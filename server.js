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
routes(app)

const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect()

app.get('/', (req, res) => {
    connection.query('SELECT * FROM users', function (err, rows, fields) {
        if (err) throw err

        res.send(rows)
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})