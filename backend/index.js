import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";

import libraryRoute from "../backend/routes/library.route.js";

mongoose
    .connect('mongodb://127.0.0.1:27017/librarydb')
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.reason)
    });

const app = express();

app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize(undefined));
app.use(passport.session(undefined));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/library',libraryRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Server Started on Port " + PORT);
})
