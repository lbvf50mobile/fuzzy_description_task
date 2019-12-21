var _ = require('lodash');

const str = x => Array.from({length: x}, ()=> String.fromCharCode(_.random(97,122))).join('');
const str_between = (x,y) => str(_.random(x,y));

exports.str = str;
exports.str_between = str_between;