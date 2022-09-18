import express from 'express';
import bcrypt from "bcrypt";

import bookSchema from "../models/Book.js";
import memberSchema from "../models/Member.js";
import issueSchema from "../models/Issue.js";
import userSchema from "../models/User.js";

const router = express.Router();

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

router.route('/search-member/:nic').get((req,res,next) =>{
    memberSchema.findOne({nic:req.params.nic},(error,data) =>{
        if(error){
            return next(error);
        } else {
            res.json(data);
        }
    })
})

router.route('/edit-member').post((req, res, next) => {
    memberSchema.findOneAndUpdate({nic:req.body.nic},{name:req.body.name,email:req.body.email,gender:req.body.gender,address:req.body.address,contact:req.body.contact},(error,data)=>{
        if(error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    })
})

router.route('/edit-book').post((req, res, next) => {
    bookSchema.findOneAndUpdate({nic:req.body.id},{name:req.body.name,author:req.body.author,quantity:req.body.quantity},(error,data)=>{
        if(error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    })
})

export default router;