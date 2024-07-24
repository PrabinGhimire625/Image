import express from "express"
const app=express()
import dotenv from "dotenv"
import db from "./db.js"
import cors from "cors"
dotenv.config()
const port=process.env.PORT||3000
app.use(express.urlencoded()); 
app.use(cors({origin: "*"}))
import router from "./routes/imageRoutes.js"
app.use("/",router)

app.use(express.static("./storage/"))  //access for the files inside the storage folder
app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`)
})