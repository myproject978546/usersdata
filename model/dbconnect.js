const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/todo",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("mongodb connected successfully")}).catch(()=>{console.log("there is an error in connect to mongodb")})

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


async function dbname(nameofdb,data){
    const usermodel = new mongoose.model(nameofdb,userSchema);
    await usermodel.insertMany([data])
}

async function findata(nameofdb){
    const usermodel = new mongoose.model(nameofdb,userSchema);
    const readata = await usermodel.find();
    return readata;
}

async function createcollection(collname){
    const usermodel = new mongoose.model(collname,userSchema);
    return 1;
}
module.exports={dbname,findata,createcollection}