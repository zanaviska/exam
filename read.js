'use strict';

const fs = require('fs');

const text = fs.readFileSync('file.json', 'UTF-8');

const table = JSON.parse(text);

module.exports = table;
