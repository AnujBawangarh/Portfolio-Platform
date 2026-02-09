import app from "./app.js";
import connectDB from "./src/config/connect.db.js";
import dotenv from "dotenv";

const port = process.env.PORT || 5000;
dotenv.config({path : './.env'});

connectDB()
.then(()=>{
    app.listen(port, () => {
        console.log(`Server is running successfully http://localhost:${port}`);
    })
})
.catch((error) => {
    console.log(`MongoDB connection failed`, error);
})





