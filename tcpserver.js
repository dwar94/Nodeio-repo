var net = require("net");
var server = net.createServer(function(socket){
	var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    if(month<10)
    month = '0'+month.toString();
    var day = date.getDate();
    if(day<10)
    day = '0'+day.toString();
    var hrs = date.getHours();
    if(hrs<10)
    hrs = '0'+hrs.toString();
    var min = date.getMinutes();
    if(min<10)
    min = '0'+min.toString();
    var str = year+"-"+month+"-"+day+" "+hrs+":"+min;
    //socket.write();
    socket.end(str.toString()+'\n');
})
server.listen(process.argv[2]);