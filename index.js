const express= require("express")
const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("welcome to my server")
})
app.get("/singup",(req,res)=>{
    res.status(200).send(req.body)
})
app.get("/login",(req,res)=>{
    res.status(200).send(req.body)
})

app.post("/singup",(req,res)=>{
    res.status(200).send(req.body)
    console.log(req.body)
})
app.post("/login",(req,res)=>{
    res.status(200).send(req.body)
    console.log(req.body)
})
app.post("/content",(req,res)=>{
    res.status(200).send(req.body)
    console.log(req.body)
})
app.post("/",(req,res)=>{
    res.status(200).send(req.body)
    console.log(req.body)
})


app.listen(7070,()=>{
    console.log("server is start 8080")
})