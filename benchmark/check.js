'use strict';

const chalk = require('chalk');
const path = require('path');
const glob = require('glob');
const repeat = require('../');

/**
 * Sanity check. Run to ensure that all fns return the same result.
 */

let fixtures = glob.sync(__dirname + '/fixtures/*.js').map(require);
let expected = fixtures.map(fixture => repeat.apply(repeat, fixture).length);

glob.sync(__dirname + '/code/*.js').forEach(function (fp) {
  let fn = require(path.resolve(__dirname, 'code', fp));
  let name = path.basename(fp, path.extname(fp));
  let problems = [];

  fixtures.forEach(function (fixture, idx) {
    let answer = fn.apply(fn, fixture).length;

    if (answer !== expected[idx]) {
      problems.push(['repeat(' + fixture.join(', ') + ').length', answer, expected[idx]]);
    }
  });

  if (problems.length === 0) {
    console.log(' ' + chalk.bold.green('✔') + ' ' + chalk.bold(name));
  } else {
    console.log(' ' + chalk.bold.red('✖') + ' ' + chalk.bold(name));

    problems.forEach(function (item, idx, arr) {
      let str = item[0] + ' gave ' + item[1] + ', expected ' + item[2];
      console.log((idx === arr.length - 1 ? ' ┗ ' : ' ┣ ') + chalk.red(str));
    });
  }
});
