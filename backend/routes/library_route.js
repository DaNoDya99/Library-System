import express from 'express';
import bcrypt from "bcrypt";
import router from './index.js';
import bookSchema from "../models/Book.js";
import memberSchema from "../models/Member.js";
import issueSchema from "../models/Issue.js";
import userSchema from "../models/User.js";



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

router.route('/delete-book/:id').get((req,res,next) => {
    bookSchema.findOne({name:req.params.id},(err,data) => {
        if(data){
            bookSchema.deleteOne({id:data.id},(err,obj) => {
                if(err) throw err;
                res.json({msg:"Book Deleted Successfully."})
            })
        } else {
            res.json({msg: "Book is not in the library."})
        }
    })
})

router.route('/return-book/:nic').get((req,res,next) => {
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
    const exist = userSchema.findOne({username: 'admin123@gmail.com'});
    if(exist){
        console.log('User already exist');
    }

    bcrypt.genSalt(10, (err,salt) => {
        if(err) return next(err);
        bcrypt.hash("admin@123",salt, (err,hash) => {
            userSchema.create({username: "admin123@gmail.com",password: hash}, (error,data) =>{
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
    bookSchema.findOneAndUpdate({id:req.body.id},{name:req.body.name,author:req.body.author,quantity:req.body.quantity},(error,data)=>{
        if(error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    })
})

router.route('/delete-member/:nic').get((req,res,next) => {
    memberSchema.findOneAndRemove(req.params.nic,(error,data) => {
        if(error){
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

export default router;