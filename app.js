'use strict';

const fs = require('fs');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
const config = require('./knexfile.js')['development'];
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const knex = require('knex')(config);
const morgan = require('morgan');
const all_users = require('./routes/all_users');


app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.disable('x-powered-by');
app.use(morgan('short'));

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.render('index', {all_users: []});
})
app.use(all_users);

app.use((_req, res) => {
    res.sendStatus(404);
});

app.listen(port, function () {
    console.log('Listening on port', port);
});

module.exports = app;
