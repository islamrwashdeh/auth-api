"use strict";
const server = require('./src/server')
const { db } = require('./src/auth/models/index')
require('dotenv').config();


db.sync().then(() => {
    start();
}).catch(console.error);