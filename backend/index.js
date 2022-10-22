import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import session from 'express-session';
import cookieParser from 'cookie-parser';

import libraryRoute from "../backend/routes/library.route.js";
import userSchema from "./models/User.js";
import router from "../backend/routes/library.route.js";

mongoose
    .connect('mongodb://127.0.0.1:27017/librarydb')
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.reason)
    });

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST"],
    credentials: true
}));
app.use('/library',libraryRoute);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60*60*24
        }
    }
))

router.post('/login', (req,res) => {
    userSchema.findOne({email:req.body.email})
        .then(
            result =>{
                
                if(!result){
                    res.json({message: "Email is not registered"});
                }else{
                    bcrypt.compare(req.body.password,result.password,(err,isMatch) => {
                        if(isMatch){
                            console.log(result)
                            res.redirect('/');
                        }else{
                            res.json({ message: "Wrong Password" })
                        }
                    })
                }
            }
        )
})


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server Started on Port " + PORT);
})
