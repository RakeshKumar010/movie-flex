const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(express.json())
app.use(cors())

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "8Jed18gerh@",
    database:"movie_hub"
  });

  db.connect((err)=>{
    if(err){
        console.log(`Database is not connected Error: ${err}`);
    }else{
        console.log('Database is Connected');
    }
  });

app.get('/',(req,res)=>{
    res.json({'server':'server is ok'})
})


app.post("/signup",(req,res)=>{
    const q = "INSERT INTO users (`username`,`email`,`phone`,`message`) VALUES (?)"
    const values = [
    req.body.username,
    req.body.email,
    req.body.phone,
    req.body.message
    ]
    db.query(q,[values],(err,data)=>{
        if(err){
            return res.json(err)
        }else{
            return res.json(data)
        }
    })
  })
app.listen(8080,()=>{
    console.log(`Server is open at localhost:8080`);
})