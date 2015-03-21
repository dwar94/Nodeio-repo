var http = require("http");
var data1 = "";
var data2 = "";
var data3 = "";
var call = 0;
http.get(process.argv[2],function(response){
	 response.setEncoding("utf8");
	 response.on("data",function(d){
	    data1+=d;
	 })
	 response.on("end",function(d){
	 	call++;
	 	if(call==3)
	 		printdata(); 
	 })
})
http.get(process.argv[3],function(response){
	 response.setEncoding("utf8");
	 response.on("data",function(d){
	    data2+=d;
	 })
	 response.on("end",function(d){
	 	call++;
	 	if(call==3)
	 	 printdata();
	 })
})
http.get(process.argv[4],function(response){
	 response.setEncoding("utf8");
	 response.on("data",function(d){
	    data3+=d;
	 })
	 response.on("end",function(d){
       call++;
       if(call==3)
          printdata();  
	 })
})
function printdata(){
   console.log(data1);
   console.log(data2);
   console.log(data3);	
}
