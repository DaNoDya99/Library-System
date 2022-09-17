import express from 'express';

import bookSchema from "../models/Book.js";
import memberSchema from "../models/Member.js";
import issueSchema from "../models/Issue.js";

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

router.route('/search-book/:name').get((req,res,next) => {
    bookSchema.findOne({name:req.params.name},(error,data) => {
        if(error){
            return next(error);
        } else {
            res.json(data);
        }
    })
})

export default router;