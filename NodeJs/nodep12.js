var fs=require('fs')
var data="java"
//Appending the file
fs.appendFile('file1.txt',data,function(err){
    if(err) throw err;
    else
    {
        console.log("File appended successfully");
    }
})