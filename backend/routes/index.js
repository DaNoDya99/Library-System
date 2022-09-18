import express from 'express';
import {ensureAuthenticated} from "../config/auth.js";

const router = express.Router();

router.get('/',ensureAuthenticated,(req, res,) => {

});