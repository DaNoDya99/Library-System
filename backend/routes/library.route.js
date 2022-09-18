import express from 'express';
import bcrypt from "bcrypt";
import passport from "passport";
import passportLocal from 'passport-local';

import bookSchema from "../models/Book.js";
import memberSchema from "../models/Member.js";
import issueSchema from "../models/Issue.js";
import userSchema from "../models/User.js";

const router = express.Router();
const localStrategy = passportLocal.Strategy;

const authFlag = {
    flag: ''
}

router.route('/add-book').post((req, res, next) => {
    bookSchema.create(req.body, (error, data) => {
        if(error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.route('/issue-book').post((req, res, next) => {
    issueSchema.create(req.body, (error, data) => {
        if(error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.route('/add-member').post((req, res, next) => {
    memberSchema.create(req.body, (error, data) => {
        if(error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

router.route('/delete-book/:name').delete((req,res,next) => {
    bookSchema.findOneAndRemove(req.params.name,(error,data) => {
        if(error){
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

router.route('/return-book/:nic').delete((req,res,next) => {
    issueSchema.findOneAndRemove(req.params.nic,(error,data) => {
        if(error){
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

router.route('/search-book/:name').get((req,res,next) => {
    bookSchema.findOne({name:req.params.name},(error,data) => {
        if(error){
            return next(error);
        } else {
            res.json(data);
        }
    })
})

router.route('/setup').get((req,res,next) => {
    res.send("Hi");
    const exist = userSchema.findOne({email: 'admin123@gmail.com'});
    if(exist){
        console.log('User already exist');
    }

    bcrypt.genSalt(10, (err,salt) => {
        if(err) return next(err);
        bcrypt.hash("admin@123",salt, (err,hash) => {
            userSchema.create({email: "admin123@gmail.com",password: hash}, (error,data) =>{
                if(error){
                    return next(error);
                } else {
                    res.json(data);
                }
            });
        })
    })
});

router.route('/login').post((req, res, next) => {
   
});

router.route('/login').get((req, res, next) => {
    res.json({flag:true});
});

export default router;