const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');

const port="3000";
const app=express();

app.use(bodyparser.json());

app.use(cors());

app.get("/",(req,res)=>{
    res.send("hello from node")
})

app.listen(port,()=>{ console.log("server running on port :",port)})

app.post("/enroll",function(req,res){
    console.log(req.body);
    res.status(200).send("data: sended successfly")
})