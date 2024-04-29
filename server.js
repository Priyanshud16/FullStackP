const express=require("express")
const connection = require("./config/db")
const userRouter = require("./Routes/userRoutes")
const noteRouter = require("./Routes/noteRouter")
const dotenv=require("dotenv").config()


const app=express()
const PORT=process.env.PORT||8080
app.use(express.json())
app.use("/user",userRouter)
app.use('/note',noteRouter)
app.get('/',(req,res)=>{
res.send("Hello world")
})

app.listen(PORT,async()=>{
    try {
       await connection;
        console.log(`server is running on ${PORT} this port and add DB `);
    } catch (error) {
        console.log(error)
    }
    
})