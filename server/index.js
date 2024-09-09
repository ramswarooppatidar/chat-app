const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('./config/connectDB')
const router = require('./routers/index.js')
const cookieParser = require('cookie-parser')

const app = express();
app.use(cors({
    origin : process.env.FRONTED_URL,
    credentials : true
}))

app.use(express.json())
app.use(cookieParser());

app.get("/", (req, res)=>{
    // res.send("welcome to chat app ")
    res.json({
        message : "server running "
    })
})

//api end ppoint
 app.use('/api', router)

const PORT = process.env.PORT || 8080
console.log("MONGODB_URI :", process.env.MONGODB_URI)
connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("http://localhost:"+PORT)
    })
})
