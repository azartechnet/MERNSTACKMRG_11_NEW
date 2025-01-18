var f1=require('fs')
//Asynchrous read
f1.readFile('sample1.txt',function(err,data){
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(data.toString());
    }
})
//Synchronous read
var data=f1.readFileSync('sample1.txt','utf8');
console.log("Synchrous Read::"+data.toString())