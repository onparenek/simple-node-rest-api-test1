require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect((error) => {
    if(error) {
        return console.log('Ошибка подключения к БД!');
    } else {
        return console.log('Подлючение успешно!');
    }
})


//TODO For Local DB connection

// const mysql = require('mysql')
// const config = require('../config.example')
//
// const connection = mysql.createConnection({
//     host: config.HOST,
//     // socketPath: config.SOCKET,
//     port: config.PORT,
//     user: config.DBUSER,
//     password: config.DBPASSWORD,
//     database: config.DBNAME
// })
//
// connection.connect((error) => {
//     if(error) {
//         return console.log('Ошибка подключения к БД!');
//     } else {
//         return console.log('Подлючение успешно!');
//     }
// })

module.exports = connection