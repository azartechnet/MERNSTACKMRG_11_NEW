const express=require('express')
const mysql=require('mysql')
const bodyparse=require('body-parser');
const cors=require('cors')

const app=express()
const port=3001;

//Middleware
app.use(cors())
app.use(bodyparse.json())

//MySQL

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'roshinidb'
});

db.connect((err)=>{
    if(!err)
        console.log('DB connected')
    else
    console.log('DB not connected')
})
//create table

app.get('/createtable',(req,res)=>{
    let sql='create table posts(id int auto_increment,title varchar(100),body text,primary key(id))';
    db.query(sql,(err,result)=>{
        if(!err)
            console.log('Table created')
        else
        console.log('Table not created')
    })
})
//insert data
app.post('/addpost',(req,res)=>{
    let post={title:req.body.title,body:req.body.body};
    let sql='insert into posts set ?';
    db.query(sql,post,(err,result)=>{
        if(!err)
           res.send('post added...')
        else
           res.send('post not added...')
    })
})


app.listen(port,()=>{
    console.log('Server started at port 3001')
})
