var fs=require("fs");
var path=require("path");
module.exports = function(dirname,extename,callback)
{
   fs.readdir(dirname,function(err,flist){
      if(err)
       return callback(err);
      flist = flist.filter(function(file){
          return path.extname(file)==='.'+extename;
      })
      callback(null,flist); 
   })

}