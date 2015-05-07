'use strict';

var Suite = require('benchmarked');

var suite = new Suite({
  result: false,
  fixtures: 'fixtures/{3,5,25,2000}.js',
  add: 'code/{current,while-push-new-array}.js',
  cwd: __dirname
});

suite.run();
