    const express = require('express')
    const app = express()
    const PORT = 5000
    const db = require('./server/config/db')
const userModel = require('./server/api/user/userModel')
    app.get('/', (req, res)=>{
        res.send('welcome to server.')
    })

    const adminRoute =require("./server/routes/adminRoute")
    app.use("./admin", adminRoute)

    // const cust
    const customerRoute = require("./server/routes/customerRoute")
    app.use("./customer", customerRoute)

    app.listen(PORT, (err)=>{
        if(err){
            console.log('error occured in server', err ); 
        }
        else{
            console.log('server is running');
        }
    })