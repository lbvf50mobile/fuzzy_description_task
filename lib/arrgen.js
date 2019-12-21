strgen = require('./strgen.js')

exports.arr = (size,start_str,end_str) => Array.from({length: size}, ()=>strgen.str_between(start_str,end_str));

