const express = require('express')
const app = express()
const path  = require("path")
const mongoose = require('mongoose')
const cors = require('cors')
//
mongoose.connect("mongodb+srv://97nitesh85:85nitesh97collectdata@cluster0.oegqizs.mongodb.net/collectdata",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("mongodb connected successfully")}).catch(()=>{console.log("there is an error in connect to mongodb")})    

const userSchema = new mongoose.Schema({
    name:String,
    city:String,
    age:String,
    email:String,
    password:String,
    gender:String
})

const usermodel = new mongoose.model("New",userSchema)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/login',async (req,res)=>{
    const data = {
    name:req.body.name,
    city:req.body.city,
    age:req.body.age,
    email:req.body.email,
    password:req.body.password,
    gender:req.body.gender
    }
    await usermodel.insertMany([data])
    res.send("data save")
})

app.get("/getusers",async (req,res)=>{
    const result = await usermodel.find()
    res.send(result)
})

app.get("/delete",async (req,res)=>{
    if(req.query.email){
        const result = await usermodel.deleteOne({email:req.query.email})
    }
    res.send("hello")
})

app.listen(6523)