const express = require('express');
//use native fetch call for APIs

const app = express();

app.use(express.static('dist'));

module.exports = app;