const express = require('express');
const router = express.Router();

const User = require('./../models/user.js');

const bcrypt = require('bcrypt');

router.post('/signup', (req, res) => {
    let {email, username, password} = req.body;

    if ((email == "") || (username == "") || (password == "")) {
        res.json({
            status: "FAILED",
            message: "Empty input fields"
        })
    } else if (!/^[a-zA-Z.]*$/.test(email)) {
        res.json({
            status: "FAILED",
            message: "The email must end in @stud.acs.upb.ro"
        });
    } else if (username.length <8 && username.length > 32) {
        res.json({
            status: "FAILED",
            message: "The username must have between 8 and 32 characters"
        });
    } else if (password.length <8 && password.length > 32) {
        res.json({
            status: "FAILED",
            message: "The password must have between 8 and 32 characters"
        }); 
    } else {
        User.find({email}).then(result  => {
            if (result.length) {
                res.json({
                    status: "FAILED",
                    message: "Email already exists"
                })
            } else {
                User.find({username}).then(result  => {
                    if (result.length) {
                        res.json({
                            status: "FAILED",
                            message: "Email already exists"
                        })
                    } else {

                        const saltRounds = 10;
                        bcrypt.hash(password, saltRounds).then(hashedPassword => {
                            const newUser = new User({
                                id,
                                email,
                                username,
                                password: hashedPassword
                            });

                            newUser.save().then(result => {
                                res.json({
                                    status: "SUCCES",
                                    message: "Signup successful",
                                    data: result,
                                })
                            }) 
                            .catch(err => {
                                res.json({
                                    status: "FAILED",
                                    message: "Password could not be saved"
                                })

                            })
                        }) .catch(err => {
                            res.json({
                                status: "FAILED",
                                message: "Password could not be hashed"
                            })

                        })
                    }
                }).catch(err => {
                    console.log(err);
                    res.json({
                        status: "FAILED",
                        message: "Error when checking for user"
                    })
                }) 
            } 
        
        }) .catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "Error when checking for user"
            })
        })
    }
});

router.post('/signin', (req, res) => {
    
})

module.exports = router ;