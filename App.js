const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true}))
app.use(cors())



app.get("/Login",cors(),(req,res)=>{
    
})

app.post("/Login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("Exist")
        }
        else{
            res.json("notExist")
        }
    }
    catch(e){
        res.json("notExist")
    }
})




app.post("/SignUp",async(req,res)=>{
    const{email,password}=req.body

    const data = {
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})
        if(check){
            res.json("Exist")
        }
        else{
            res.json("notExist")
            await collection.insertMany([data])
        }
    }
    catch(e){
        res.json("notExist")
    }
})

app.listen(8000,()=>{
    console.log("Port Connect")
})