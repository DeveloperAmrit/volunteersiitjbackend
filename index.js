import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { createUser } from './handlers/handleUser.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());



// for mongoose logs
mongoose.set('debug', true);

// .env file use
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.PASSWORD
const URI = `mongodb+srv://${USERNAME}:${PASSWORD}@hdcluster0.x8tr1.mongodb.net/?`

console.log(URI)

// connecting to mongoDB
try{
    mongoose.connect(URI);
    console.log("Connected to MongoDB")
}
catch(err){
    console.log(err);
}

// TESTING

app.post("/createUser",async (req,res)=>{
    const {name,email,college,isAdvertiser} = req.body;
    try{
        createUser(name,email,college,isAdvertiser);
        res.status(200).json({message: "User created Successfully"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to create user", error: `${err}`})
    }
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}/`);
});
