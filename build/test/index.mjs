import assert from 'node:assert';
import config  from './config.yml';
import actual from './actual.json' with { type: 'json' };

assert.deepEqual(config, actual);
