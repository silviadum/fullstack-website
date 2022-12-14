const express = require('express');
const router = express.Router();

const User = require('./../models/user');

const bcrypt = require('bcrypt');


router.post('/signup', (req, res) => {
    let {email, username, password} = req.body;
    email=email.trim();
    username=username.trim();
    password=password.trim();
    
    if ((email == "") || (username == "") || (password == "")) {
        res.json({
            status: "FAILED",
            message: "Empty input fields"
        })
    } else if (!/^[a-zA-Z.]+[@stud.acs.upb.ro]*$/.test(email)) {
        res.json({
            status: "FAILED",
            message: "The email must end in @stud.acs.upb.ro"
        });
    } else if ((username.length < 8) || (username.length > 32)) {
        res.json({
            status: "FAILED",
            message: "The username must have between 8 and 32 characters"
        });
    } else if ((password.length < 8) || (password.length > 32)) {
        res.json({
            status: "FAILED",
            message: "The password must have between 8 and 32 characters"
        }); 
    } else { 
        User.find({email}).then(result1  => {
            if (result1.length) {
                console.log("12");
                res.json({
                    status: "FAILED",
                    message: "Email already exists"
                })
            } else { 
                User.find({username}).then(result2  => {
                    if (result2.length) {
                        
                        res.json({
                            status: "FAILED",
                            message: "Username already exists"
                        })
                    } else {
                        

                        const saltRounds = 10;
                        bcrypt.hash(password, saltRounds).then(hashedPassword => {
                            const newUser = new User({
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
    let {username, password} = req.body;
    username=username.trim();
    password=password.trim();

    if ((username == "") || (password == "")) {
        res.json({
            status: "FAILED",
            message: "Empty input fields"
        })
    } else {
        User.find({username}) .then(data =>{
            if (data) {
                const hashedPassword = data[0].password;
                bcrypt.compare(password, hashedPassword) .then(result => {
                    if (result) {
                        res.json({
                            status: "SUCCES",
                            message: "Signin succesful",
                            data: data
                        })
                    } else {
                        res.json({
                            status: "FAILED",
                            message: "Invalid password"
                        })
                    }
                }) .catch(err => {
                    res.json({
                        status: "Failed",
                        message: "Error when entering password"
                    })
                })
            }
        })
    }
})
 
module.exports = router ;