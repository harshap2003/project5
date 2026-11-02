import express from "express";
import { connectToDatabase } from "./db.js";
import userRouter from "./routes/usersRoute.js";

let url = "mongodb+srv://pharsha0002_db_user:WrlKatzRyUdcv00t@cluster0.u5igkku.mongodb.net/?appName=Cluster0"
const app = express();

app.use(express.json())  //builtin middleware which reads info from the client

app.use('/users', userRouter)

connectToDatabase(url).then(()=>{
  app.listen(3000,  ()=>{
  console.log("server running")
})

}).catch( (err)=>{console.log(err)})
