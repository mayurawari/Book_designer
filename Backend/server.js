import express from "express"
import cors from 'cors';
import { config } from "dotenv"
import connectToDB from "./src/databases/db.js";
import router from "./src/routes/bookroute.js";
config();
const port=process.env.PORT || 8080;
const URI=process.env.URI || null;
const app=express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api', router);


app.listen(port ,async()=>{
    try {
        await connectToDB(URI);
        console.log("successfully connected");
        console.log(`server is running at port ${port}`) ;
    } catch (error) {

        console.log(error)
        
    }
})