const assert = require('node:assert');
const config = require('./config.yml');
const actual = require('./actual.json');

assert.deepEqual(config, actual);
