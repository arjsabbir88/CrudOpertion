const app = require('express');
// const app = express();
const {MongoClient, ServerApiVersion} = require('mongodb')
const port = 3000;




const uri = "mongodb+srv://crud_operation:0VQcjkPuToutiUGH@crudopeation.vbrouwv.mongodb.net/?retryWrites=true&w=majority&appName=CrudOpeation";


const client = new MongoClient(uri,{
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})


app.get("/",(req,res)=>{
    res.send("Hello world");

})



app.listen(port,()=>{
    console.log(`example app listing on port ${port}`);
})