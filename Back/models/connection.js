const mysql = require('mysql2/promise');

require('dotenv').config();

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.PASSWORD || 'V@c@h0791',
    database: process.env.DATABASE ||'GustavoBank'
});

module.exports = connection;