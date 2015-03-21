var fs = require("fs");
var buff = fs.readFileSync(process.argv[2]);
var buffstr = buff.toString();
var splitstr = buffstr.split('\n');
console.log(splitstr.length-1);