const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = process.env.PORT || 5000;
// midelware
app.use(cors());
app.use(express.json());


//create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee_info'
});

// connect to the database
connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('successfully connected');

})



app.get('/admin/emps',(req,res)=>{
    //write query

    const sql = 'select * from emp';
    connection.query(sql,(err,result)=>{
        if(err){
            console.error(err)
            return res.send('database query failed')
        }
        res.send(result);
    })
})

app.get('/',(req,res)=>{
    res.send('this server is running');
})

// first get method
//second post method

app.post('/employees',(req,res)=>{
    console.log("hittinh");
    console.log(req.body);
})

app.post('/admin/add-emp',(req,res)=>{
    // console.log("addmin panel hitting");
    console.log(req.body);
    const { empName,empFatherName,empMotherName } = req.body;
    //write insert query
    const sql = 'insert into emp (empName,empFatherName,empMotherName ) values (?,?,?)';

    connection.query(sql,[empName,empFatherName,empMotherName],(err,result)=>{
     if(err){
        console.error('error inserting  into the database',err)
        return res.send('database inserted failed');
     }
     res.send(result)
    })
})




app.listen(port,()=>{
    console.log('hello');
})