var http = require("http");
http.get(process.argv[2],function(response){
	response.setEncoding('utf8');
	var line2 = "";
	var line1 = 0;
	response.on("data",function(d){
	    line1+=d.length;
        line2+=d; 
	})
	response.on("end",function(d){
		console.log(line1);
		console.log(line2);
	})
});