var modulefn = require("./mymodule.js")
modulefn(process.argv[2],process.argv[3],function(err,flist){
	if(err)
	 console.log("There wass an error:",err);
	flist.forEach(function(file){
	   console.log(file);
	}) 
})