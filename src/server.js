'use strict';

const express = require('express');
require('dotenv').config();
const server = express();
const PORT = process.env.PORT || 3002;
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');

const v1 = require('src/auth/Router/V1r.js');
const v2 = require('src/auth/Router/V2r.js');
//const clothesRouter = require('./routes/clothes.route');
server.use(logger);
server.use(express.json());
server.use(v2);
server.use(v1);
server.use('*', notFoundHandler);
server.use(errorHandler);



function start() {
    server.listen(PORT, () => {
        console.log(`Server Listening on ${PORT}`);
    });
}

module.exports = {
    server: server,
    start: start,
}