import Strategy from "passport-local";
import bcrypt from "bcrypt";
import userSchema from "../models/User.js";

const LocalStrategy = Strategy.Strategy;

export default (passport) => {
    passport.use(
        new LocalStrategy({
            usernameField: 'email'
        }, (email,password,done) => {
            userSchema.findOne({
                email: email
            }).then(user => {
                if(!user) {
                    return done((null,false, {
                        msg: 'That email is not registered.'
                    }));
                }

                bcrypt.compare(password,user.password,(err,isMatch) => {
                    if(err) throw err;

                    if(isMatch){
                        return done(null,user);
                    }else {
                        done(null, false, {
                            msg: "Password incorrect"
                        });
                    }
                });
            }).catch(err => console.log(err));
        })
    );

    passport.serializeUser((user, done) => {
        done(null,user.id)
    });

    passport.deserializeUser((id, done) => {
        userSchema.findById(id, (err,user) => {
            done(err, user);
        });
    });
}