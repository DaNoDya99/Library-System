import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

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
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/library',libraryRoute);

const authFlag = {
    flag: ''
}

router.post('/login', (req,res) => {
    userSchema.findOne({email:req.body.email})
        .then(
            user =>{
                if(!user){
                    console.log("Email is not registered");
                    authFlag.flag = false;
                }else{
                    bcrypt.compare(req.body.password,user.password,(err,isMatch) => {
                        if(err) throw err;

                        if(isMatch){
                            authFlag.flag = true;
                        }else{
                            console.log("Not matched");
                            authFlag.flag = false;
                        }
                    })
                }
            }
        )
})

router.get('/login',(req,res) => {
    res.json(authFlag);
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server Started on Port " + PORT);
})
