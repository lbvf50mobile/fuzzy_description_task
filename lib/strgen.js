var _ = require('lodash');

exports.str = x => Array.from({length: x}, ()=> String.fromCharCode(_.random(97,122))).join('');