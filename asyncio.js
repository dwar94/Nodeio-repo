var fs = require("fs");
fs.readFile(process.argv[2],function(err,buff)
{
	var str=buff.toString();
	var splitstr=str.split('\n');
	console.log(splitstr.length-1);
});